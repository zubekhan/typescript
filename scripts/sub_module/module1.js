define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var Module1;
    (function (Module1) {
        var Solution1 = /** @class */ (function () {
            function Solution1(num) {
                var _this = this;
                this.num = num;
                // Generate Even Number for problem statement 1
                this.generateEven = function () {
                    var temp = _this.num;
                    var result = [];
                    while (temp !== 0) {
                        if (temp % 2 === 0) {
                            result.push(temp);
                        }
                        temp--;
                    }
                    result.sort(function (x, y) { return x - y; });
                    return result;
                };
            }
            return Solution1;
        }());
        Module1.Solution1 = Solution1;
    })(Module1 = exports.Module1 || (exports.Module1 = {}));
});
