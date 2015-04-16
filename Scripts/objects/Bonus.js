var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // ISLAND CLASS
    var Bonus = (function (_super) {
        __extends(Bonus, _super);
        // CONSTRUCTOR
        function Bonus() {
            _super.call(this, "bonus");
            //this.sound = "PowerUp";
            this.reset();
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Bonus.prototype.update = function () {
            this.x -= this._dy;
            this.rotation += 1;
            //this._checkBounds();
            this.counter++;
            if (this.counter == 1000) {
                this.reset();
                this.counter = 0;
            }
        };
        // Reset position of island to the top
        Bonus.prototype.reset = function () {
            this.y = 10;
            this.x = 640;
            this._dy = Math.floor(Math.random() * 5) + 5;
            this.scaleX = 1;
            this.scaleY = 1;
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        Bonus.prototype._checkBounds = function () {
            // check if island has left the right of the screen
            if (this.x <= (0)) {
                this.reset();
            }
        };
        return Bonus;
    })(objects.GameObject);
    objects.Bonus = Bonus;
})(objects || (objects = {}));
//# sourceMappingURL=bonus.js.map