module objects {
    // ISLAND CLASS
    export class Bonus extends objects.GameObject {

        // CONSTRUCTOR
        constructor() {
            super("bonus");
            //this.sound = "PowerUp";

            this.reset();
        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        public update() {
            this.x -= this._dy;
            this.rotation += 1;
            //this._checkBounds();
            this.counter++;
            if (this.counter == 1000) {
                this.reset();
                this.counter = 0;
            }
        }

        // Reset position of island to the top
        public reset() {
            this.y = 10;
            this.x = 640;
            this._dy = Math.floor(Math.random() * 5) + 5;
            this.scaleX = 1;
            this.scaleY = 1;
        }

        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        private _checkBounds() {
            // check if island has left the right of the screen
            if (this.x <= (0)) {
                this.reset();

            }
        }

    }

} 