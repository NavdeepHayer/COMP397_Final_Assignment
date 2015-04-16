/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/scoreboard.ts" />
var states;
(function (states) {
    // GAME OVER STATE CLASS
    var instructions = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function instructions() {
            this.tryAgain = false;
            // Instantiate Game Container
            this.game = new createjs.Container();
            //createjs.Sound.play("gameover", { loop: -1 });
            //Ocean object
            this.back = new createjs.Bitmap("assets/images/instructions.png");
            this.game.addChild(this.back);
            //Try Again Button
            this.tryAgainButton = new objects.Button(320, 450, "back");
            this.tryAgainButton.on("click", this.tryAgainClicked, this);
            this.game.addChild(this.tryAgainButton);
            // Add Game Container to Stage
            stage.addChild(this.game);
        } // Constructor
        instructions.prototype.tryAgainClicked = function () {
            this.tryAgain = true;
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        instructions.prototype.update = function () {
            if (this.tryAgain) {
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.MENU_STATE;
                stateChanged = true;
                createjs.Sound.stop();
            }
            stage.update(); // Refreshes our stage
        }; // Update Method
        return instructions;
    })();
    states.instructions = instructions; // Game Over Class
})(states || (states = {})); // States Module
//# sourceMappingURL=instructions.js.map