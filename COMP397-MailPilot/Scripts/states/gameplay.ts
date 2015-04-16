/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/bonus.ts" />

module states {

    export class GamePlay {
        // Game Objects 
        public counter = 0;
        public game: createjs.Container;
        public scoreboard: objects.ScoreBoard;
        public plane: objects.Plane;
        public bonus: objects.Bonus;
        public shotgun: createjs.Sound;
        public forground: createjs.Bitmap;
        public island: objects.Island
        public clouds: objects.Cloud[] = [];
        public ocean: objects.Ocean;


        constructor() {
            // Instantiate Game Container
            this.game = new createjs.Container();


            //Ocean object
            this.ocean = new objects.Ocean();
            this.game.addChild(this.ocean);

            this.bonus = new objects.Bonus();
            this.game.addChild(this.bonus);
            

            //Island object
            this.island = new objects.Island();
            this.game.addChild(this.island);

            // Instantiate Scoreboard
            this.scoreboard = new objects.ScoreBoard(this.game);


            this.forground = new createjs.Bitmap("assets/images/foreGROUND.png");
            this.game.addChild(this.forground);

            //Cloud object
            for (var cloud = constants.CLOUD_NUM; cloud >= 0; cloud--) {
                this.clouds[cloud] = new objects.Cloud();
                this.game.addChild(this.clouds[cloud]);
            }


            //Plane object
            this.plane = new objects.Plane();
            this.game.addChild(this.plane);

            // Add Game Container to Stage
            stage.addChild(this.game);
        } // Constructor
        public clicked() {
            console.log("Clicked");
            createjs.Sound.play("Explosion");
            this.scoreboard.score+=1;
        }

        public clicked2() {
            console.log("Zombie Clicked");
            createjs.Sound.play("Explosion");
            this.counter++;
            if (this.counter == 2) {
                this.island.reset();
                this.scoreboard.score += 2;
                this.counter = 0;
            }
        }

        public clicked3() {
            console.log("Clicked HL2");
            createjs.Sound.play("PowerUp");
            this.counter++;
            this.scoreboard.score += 50;


        }

        
        public update() {

            this.ocean.update();

            this.island.update();


            this.bonus.update();
 

            this.island.on('click', this.clicked2, this);

            this.bonus.on('click', this.clicked3, this);

            this.plane.update();

           
            for (var cloud = constants.CLOUD_NUM; cloud >= 0; cloud--) {
                this.clouds[cloud].update();
                this.clouds[cloud].on('click', this.clicked, this);

                if (this.clouds[cloud].scaleX >= 10) {
                    this.clouds[cloud].reset();
                    console.log("Lose a life");
                    this.scoreboard.lives--;
                }
            }
            
          
            this.scoreboard.update();

            if (this.scoreboard.lives < 1) {
                this.scoreboard.active = false;
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                createjs.Sound.stop();
                currentState = constants.GAME_OVER_STATE;
                stateChanged = true;
            }
            
            
                currentScore = this.scoreboard.score;
                if (currentScore > highScore) {
                    highScore = currentScore;
                }



            stage.update(); // Refreshes our stage
        }

    }

} 