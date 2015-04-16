module objects {
    // ISLAND CLASS
    export class Island extends objects.GameObject{

        // CONSTRUCTOR
        constructor() {
            super("Astronaut");
            //this.sound = "PowerUp";

            this.reset();
        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        public update() {
            this.x -= this._dy;
            this._checkBounds();
            
        }

        // Reset position of island to the top
        public reset() {
            this.y = 275;
            this.x = 640;
            this._dy = Math.floor(Math.random() * 2) + 5;
            this.scaleX = 2;
            this.scaleY = 2;
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