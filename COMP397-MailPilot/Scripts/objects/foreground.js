var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // OCEAN CLASS
    var ForeGround = (function (_super) {
        __extends(ForeGround, _super);
        // CONSTRUCTOR
        function ForeGround() {
            _super.call(this, assetLoader.getResult("forground"));
            // PUBLIC INSTANCE VARIABLES
            this._dy = 5;
            //this.reset();
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        ForeGround.prototype.update = function () {
            //this.x -= this._dy;
        };
        // Reset position of island to the top
        ForeGround.prototype.reset = function () {
            this.y = 0;
            this.x = 0;
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        ForeGround.prototype._checkBounds = function () {
            // check if island has left the bottom of the screen
            //if (this.x === -720) {
            //    this.reset();
            //}
        };
        return ForeGround;
    })(createjs.Bitmap);
    objects.ForeGround = ForeGround;
})(objects || (objects = {}));
//# sourceMappingURL=foreground.js.map