module objects {
    // CLOUD CLASS
    export class Cloud extends objects.GameObject {
        // CONSTRUCTOR
        constructor() {
            super("Astroid");
            this.sound = "Explosion";
            this.reset();
            
            this.setButtonListeners();
 
        }
        public setButtonListeners() {
            this.cursor = 'nono';
            this.on('click', this.clicked);
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        public update() {

            this.y -= this._dy;
            this.x += this._dx;
            this.scaleX += 0.05;
            this.scaleY += 0.05;
            this._checkBounds();
        }

        // Reset position of island to the top
        public reset() {

            this.x = Math.floor(Math.random() * 640);
            this.y = 410
            this.scaleX = 0;
            this.scaleY = 0;
            this._dy = 1; 
            this._dx = Math.floor(Math.random() * 4) - 2;


        }
        public clicked() {
            
            this.reset();
        }


        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        private _checkBounds() {
            // check if island has left the bottom of the screen
            if (this.y < (175)) {
                console.log("Hit");
                this.reset();
            }
        }

    }

}  