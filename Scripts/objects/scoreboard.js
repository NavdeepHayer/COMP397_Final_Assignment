var objects;
(function (objects) {
    // SCOREBOARD CLASS ++++++++++++++++++++++++++++++++++++++++
    var ScoreBoard = (function () {
        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++
        function ScoreBoard(game) {
            this.score = 0;
            this.lives = 3;
            this.active = true;
            this._livesLabel = new createjs.Text("Lives: ", "42px Calibri", "#FFFFFF");
            game.addChild(this._livesLabel);
            this._scoreLabel = new createjs.Text("Points:", "42px Calibri", "#FFFFFF");
            this._scoreLabel.x = 400;
            game.addChild(this._scoreLabel);
        }
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++
        ScoreBoard.prototype.update = function () {
            this._livesLabel.text = "Lives:" + this.lives;
            this._scoreLabel.text = "Points: " + this.score;
        };
        return ScoreBoard;
    })();
    objects.ScoreBoard = ScoreBoard;
})(objects || (objects = {}));
//# sourceMappingURL=scoreboard.js.map