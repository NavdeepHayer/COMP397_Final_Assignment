/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />

/// <reference path="../objects/scoreboard.ts" />

module states {
    // GAME OVER STATE CLASS
    export class GameOver {
        // Game Objects 
        public game: createjs.Container;
        public back: createjs.Bitmap;
        public gameOverLabel: createjs.Bitmap;
        public finalScoreLabel: objects.Label;
        public highScoreLabel: objects.Label;
        public tryAgainButton: objects.Button;
        public tryAgain: boolean = false;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            // Instantiate Game Container
            this.game = new createjs.Container();

            createjs.Sound.play("gameover", { loop: -1 });

            //Ocean object
            this.back = new createjs.Bitmap("assets/images/gameoverback.png");
            this.game.addChild(this.back);

            this.gameOverLabel = new createjs.Bitmap("assets/images/gameover.png");
            this.gameOverLabel.x = 150;
            this.game.addChild(this.gameOverLabel);

            //Final Score Label
            this.finalScoreLabel = new objects.Label(320, 200, ("FINAL SCORE: " + currentScore));
            this.game.addChild(this.finalScoreLabel);

            //High Score Label
            this.highScoreLabel = new objects.Label(320, 300,("HIGH SCORE: " + highScore));
            this.game.addChild(this.highScoreLabel);

            //Try Again Button
            this.tryAgainButton = new objects.Button(320, 400, "tryAgainButton");
            this.tryAgainButton.on("click", this.tryAgainClicked, this);

            this.game.addChild(this.tryAgainButton);

            // Add Game Container to Stage
            stage.addChild(this.game);
        } // Constructor

        public tryAgainClicked() {
            this.tryAgain = true;
        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        public update() {


            if (this.tryAgain) {
                this.game.removeAllChildren();
                stage.removeChild(this.game);

                currentState = constants.MENU_STATE;
                stateChanged = true;
                createjs.Sound.stop();
            }

            stage.update(); // Refreshes our stage

        } // Update Method

    } // Game Over Class


} // States Module