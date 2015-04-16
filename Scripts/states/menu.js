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
    // MENU STATE CLASS
    var Menu = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Menu() {
            this.play = false;
            this.playHard = false;
            this.playinsrt = false;
            // Instantiate Game Container
            this.game = new createjs.Container();
            //addedSound TO the mainMenu
            createjs.Sound.play("MainMenu", { loop: -1 });
            //Ocean object
            this.background = new createjs.Bitmap("assets/images/menubackground.png");
            this.game.addChild(this.background);
            //Game Over Label
            this.Title = new createjs.Bitmap("assets/images/title.png");
            this.Title.x = 150;
            this.Title.y = 60;
            this.game.addChild(this.Title);
            //Play Button
            this.playButton = new objects.Button(320, 300, "playButton");
            this.playButton.on("click", this.playClicked, this);
            this.game.addChild(this.playButton);
            this.playButton2 = new objects.Button(320, 400, "hardcore");
            this.playButton2.on("click", this.playClickedHard, this);
            this.game.addChild(this.playButton2);
            this.playButton3 = new objects.Button(320, 200, "inst");
            this.playButton3.on("click", this.playClickedInst, this);
            this.game.addChild(this.playButton3);
            // Add Game Container to Stage
            stage.addChild(this.game);
        } // Constructor
        Menu.prototype.playClicked = function () {
            this.play = true;
        };
        Menu.prototype.playClickedHard = function () {
            this.playHard = true;
        };
        Menu.prototype.playClickedInst = function () {
            this.playinsrt = true;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        Menu.prototype.update = function () {
            if (this.play) {
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                constants.CLOUD_NUM = 0;
                createjs.Sound.stop();
                currentState = constants.PLAY_STATE;
                stateChanged = true;
            }
            if (this.playinsrt) {
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.INSTRUCTIONS;
                stateChanged = true;
            }
            if (this.playHard) {
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                constants.CLOUD_NUM = 5;
                createjs.Sound.stop();
                currentState = constants.PLAY_STATE;
                stateChanged = true;
            }
            stage.update(); // Refreshes our stage
        }; // Update Method
        return Menu;
    })();
    states.Menu = Menu; // Menu Class
})(states || (states = {})); // States Module
//# sourceMappingURL=menu.js.map