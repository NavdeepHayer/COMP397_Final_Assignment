﻿module objects {
    // OCEAN CLASS
    export class ForeGround extends createjs.Bitmap {
        // PUBLIC INSTANCE VARIABLES
        private _dy: number = 5;

        // CONSTRUCTOR
        constructor() {
            super(assetLoader.getResult("forground"));

           //this.reset();
        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        public update() {
            //this.x -= this._dy;
        }

        // Reset position of island to the top
        public reset() {
            this.y = 0;
            this.x = 0;
        }

        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        private _checkBounds() {
            // check if island has left the bottom of the screen
            //if (this.x === -720) {
            //    this.reset();
            //}
        }

    }

}  