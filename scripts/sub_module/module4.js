define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var Module4;
    (function (Module4) {
        var Solution4 = /** @class */ (function () {
            function Solution4(array) {
                var _this = this;
                this.array = array;
                // reverse and sort array alphabeticall order
                this.execute = function () {
                    var result;
                    if (_this.array.length > 0) {
                        result = _this.array.reverse().sort();
                    }
                    else {
                        throw 'No value in array';
                    }
                    return result;
                };
            }
            return Solution4;
        }());
        Module4.Solution4 = Solution4;
    })(Module4 = exports.Module4 || (exports.Module4 = {}));
});
