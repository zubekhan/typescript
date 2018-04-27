define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var Module3;
    (function (Module3) {
        var Solution3 = /** @class */ (function () {
            function Solution3(num) {
                var _this = this;
                this.num = num;
                this.randomArray = [];
                // to initilize the array of five random values ranging from 1 to 50
                this.init = function () {
                    var array = [];
                    for (var i = 0; i < 5; i++) {
                        array.push(_this.getRandomNumber(1, 50));
                    }
                    console.log(array);
                    return array;
                };
                // to generate a random number ranging from 1 to 50
                this.getRandomNumber = function (min, max) {
                    return (Math.floor(Math.random() * (max - min + 1)) + min);
                };
                // to check if given number is present in random array
                this.tryYourLuck = function () {
                    if (_this.num !== undefined) {
                        if (_this.randomArray.indexOf(_this.num) > -1) {
                            return true;
                        }
                    }
                    else {
                        throw 'Number is empty';
                    }
                    return false;
                };
                this.randomArray = this.init();
            }
            return Solution3;
        }());
        Module3.Solution3 = Solution3;
    })(Module3 = exports.Module3 || (exports.Module3 = {}));
});
