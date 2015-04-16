module objects {
    // SCOREBOARD CLASS ++++++++++++++++++++++++++++++++++++++++
    export class ScoreBoard {
        public score: number;
        public lives: number;
        public active: boolean;
        private _scoreLabel: createjs.Text;
        private _livesLabel: createjs.Text;

        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++
        constructor(game: createjs.Container) {
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

        public update(): void {
            this._livesLabel.text = "Lives:" + this.lives;
            this._scoreLabel.text = "Points: " + this.score;
        }

    }
} 