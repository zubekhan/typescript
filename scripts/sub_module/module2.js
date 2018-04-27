define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var Module2;
    (function (Module2) {
        var Solution2 = /** @class */ (function () {
            function Solution2(array) {
                var _this = this;
                this.array = array;
                this.sum = 0;
                this.avg = 0;
                this.getSum = function () {
                    for (var _i = 0, _a = _this.array; _i < _a.length; _i++) {
                        var num = _a[_i];
                        _this.sum += num;
                    }
                    return _this.sum;
                };
                this.getAvg = function () {
                    return (_this.avg = _this.sum / _this.array.length);
                };
                this.getAvgLessValue = function () {
                    var array = [];
                    for (var _i = 0, _a = _this.array; _i < _a.length; _i++) {
                        var num = _a[_i];
                        if (num < _this.avg) {
                            array.push(num);
                        }
                    }
                    return array;
                };
            }
            return Solution2;
        }());
        Module2.Solution2 = Solution2;
    })(Module2 = exports.Module2 || (exports.Module2 = {}));
});
