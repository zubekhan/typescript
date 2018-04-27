define(["require", "exports", "./sub_module/module1", "./sub_module/module2", "./sub_module/module3", "./sub_module/module4"], function (require, exports, M1, M2, M3, M4) {
    "use strict";
    exports.__esModule = true;
    var Solution1 = M1.Module1.Solution1;
    var Solution2 = M2.Module2.Solution2;
    var Solution3 = M3.Module3.Solution3;
    var Solution4 = M4.Module4.Solution4;
    var AppModule;
    (function (AppModule) {
        var BootstrapApplication = /** @class */ (function () {
            function BootstrapApplication() {
                this.executeSolution1 = function () {
                    var result = '<b>Result:</b><br>';
                    var num = new Number(document.getElementById('n').value).valueOf();
                    var solution = new Solution1(num);
                    var array = solution.generateEven();
                    for (var index = 0; index < array.length; index++) {
                        if ((index + 1) !== array.length) {
                            result += (array[index] + ", ");
                        }
                        else {
                            result += array[index];
                        }
                    }
                    document.getElementById('result1').innerHTML = result;
                };
                this.executeSolution2 = function () {
                    var result = '<b>Result:</b><br>';
                    var num = document.getElementById('array').value;
                    var temp = num.split(',');
                    var array = [];
                    var avgArray;
                    for (var _i = 0, temp_1 = temp; _i < temp_1.length; _i++) {
                        var i = temp_1[_i];
                        array.push(parseInt(i));
                    }
                    var solution = new Solution2(array);
                    result += '<b>Sum:</b> ' + solution.getSum() + '<br>';
                    result += '<b>Average:</b> ' + solution.getAvg().toFixed(2) + '<br>';
                    result += '<b>Less Than Average Values: </b><br>';
                    avgArray = solution.getAvgLessValue();
                    for (var index = 0; index < avgArray.length; index++) {
                        if ((index + 1) !== avgArray.length) {
                            result += (array[index] + ", ");
                        }
                        else {
                            result += array[index];
                        }
                    }
                    document.getElementById('result2').innerHTML = result;
                };
                this.executeSolution3 = function () {
                    var result = '<b>Result:</b><br>';
                    var num = new Number(document.getElementById('num').value).valueOf();
                    var solution = new Solution3(num);
                    var lucky = solution.tryYourLuck();
                    if (lucky) {
                        result += '<H3>BINGO</H3><br>';
                    }
                    else {
                        result += '<H3>BAD LUCK TRY AGAIN</H3><br>';
                    }
                    document.getElementById('result3').innerHTML = result;
                };
                this.executeSolution4 = function () {
                    var result = '<b>Result:</b><br>';
                    var num = document.getElementById('word').value;
                    var array = num.split(',');
                    var formatedArray;
                    var solution = new Solution4(array);
                    formatedArray = solution.execute();
                    for (var index = 0; index < formatedArray.length; index++) {
                        if ((index + 1) !== formatedArray.length) {
                            result += (formatedArray[index] + ", ");
                        }
                        else {
                            result += formatedArray[index];
                        }
                    }
                    document.getElementById('result4').innerHTML = result;
                };
            }
            return BootstrapApplication;
        }());
        AppModule.BootstrapApplication = BootstrapApplication;
    })(AppModule = exports.AppModule || (exports.AppModule = {}));
    var App = AppModule.BootstrapApplication;
});
