/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/label.ts" />

module states {

    export class Gameplay_Hard {
        // Game Objects 
        public counter = 0;
        public game: createjs.Container;
        public scoreboard: objects.ScoreBoard;
        public plane: objects.Plane;
        public shotgun: createjs.Sound;
        public forground: createjs.Bitmap;
        public island: objects.Island
        public clouds: objects.Cloud[] = [];
        public ocean: objects.Ocean;


        constructor() {
            // Instantiate Game Container
            this.game = new createjs.Container();
            console.log("Loading Game");

            //Ocean object
            this.ocean = new objects.Ocean();
            this.game.addChild(this.ocean);



            //Island object
            this.island = new objects.Island();
            this.game.addChild(this.island);


            //Cloud object
            for (var cloud = 2; cloud >= 0; cloud--) {
                this.clouds[cloud] = new objects.Cloud();
                this.game.addChild(this.clouds[cloud]);
            }

            // Instantiate Scoreboard
            this.scoreboard = new objects.ScoreBoard(this.game);


            this.forground = new createjs.Bitmap("assets/images/foreGROUND.png");
            this.game.addChild(this.forground);


            //Plane object
            this.plane = new objects.Plane();
            this.game.addChild(this.plane);

            // Add Game Container to Stage
            stage.addChild(this.game);
        } // Constructor
        public clicked() {
            console.log("Clicked");

            this.scoreboard.score += 0.25;
        }

        public clicked2() {
            console.log("Zombie Clicked");
            this.counter++;
            if (this.counter == 2) {
                this.island.reset();
                this.scoreboard.score += 0.75;
                this.counter = 0;
            }
        }


        public update() {

            this.ocean.update();

            this.island.update();

            this.island.on('click', this.clicked2, this);

            this.plane.update();


            for (var cloud = 2; cloud >= 0; cloud--) {
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

                currentState = constants.GAME_OVER_STATE;
                stateChanged = true;
            }
            createjs.Sound.stop();
            currentScore = this.scoreboard.score;
            if (currentScore > highScore) {
                highScore = currentScore;
            }



            stage.update(); // Refreshes our stage
        }

    }

} 