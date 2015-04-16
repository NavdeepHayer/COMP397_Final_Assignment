var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // CLOUD CLASS
    var Cloud = (function (_super) {
        __extends(Cloud, _super);
        // CONSTRUCTOR
        function Cloud() {
            _super.call(this, "Astroid");
            this.sound = "Explosion";
            this.reset();
            this.setButtonListeners();
        }
        Cloud.prototype.setButtonListeners = function () {
            this.cursor = 'nono';
            this.on('click', this.clicked);
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Cloud.prototype.update = function () {
            this.y -= this._dy;
            this.x += this._dx;
            this.scaleX += 0.05;
            this.scaleY += 0.05;
            this._checkBounds();
        };
        // Reset position of island to the top
        Cloud.prototype.reset = function () {
            this.x = Math.floor(Math.random() * 640);
            this.y = 410;
            this.scaleX = 0;
            this.scaleY = 0;
            this._dy = 1;
            this._dx = Math.floor(Math.random() * 4) - 2;
        };
        Cloud.prototype.clicked = function () {
            this.reset();
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        Cloud.prototype._checkBounds = function () {
            // check if island has left the bottom of the screen
            if (this.y < (175)) {
                console.log("Hit");
                this.reset();
            }
        };
        return Cloud;
    })(objects.GameObject);
    objects.Cloud = Cloud;
})(objects || (objects = {}));
//# sourceMappingURL=cloud.js.map