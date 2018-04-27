import M1 = require('./sub_module/module1');
import M2 = require('./sub_module/module2');
import M3 = require('./sub_module/module3');
import M4 = require('./sub_module/module4');

var Solution1 = M1.Module1.Solution1;
var Solution2 = M2.Module2.Solution2;
var Solution3 = M3.Module3.Solution3;
var Solution4 = M4.Module4.Solution4;

export namespace AppModule {

    export class BootstrapApplication {

        constructor(){}

        executeSolution1 = () => {
            var result:string = '<b>Result:</b><br>';
            var num = new Number((<HTMLInputElement>document.getElementById('n')).value).valueOf();
            var solution = new Solution1(num);
            var array:number[] = solution.generateEven();
            for(var index =0 ; index<array.length; index++){
               if((index+1)!==array.length){ 
                    result += (array[index]+", ");
                } else {
                    result += array[index];
                }
            }
            document.getElementById('result1').innerHTML = result;
        }

        executeSolution2 = () => {
            var result:string = '<b>Result:</b><br>';
            var num:string = (<HTMLInputElement>document.getElementById('array')).value;
            var temp:string[] = num.split(',');
            var array:number[] = [];
            var avgArray:number[];
            for(var i of temp){
                array.push(parseInt(i));
            }

            var solution = new Solution2(array);
            result += '<b>Sum:</b> '+ solution.getSum()+'<br>';
            result += '<b>Average:</b> '+ solution.getAvg().toFixed(2)+'<br>';
            result += '<b>Less Than Average Values: </b><br>';
            avgArray =  solution.getAvgLessValue();

            for(var index = 0 ; index<avgArray.length; index++){
                if((index+1)!==avgArray.length){
                     result += (array[index]+", ");
                 } else {
                     result += array[index];
                 }
             }
             document.getElementById('result2').innerHTML = result;
        }

        executeSolution3 = () => {
            var result:string = '<b>Result:</b><br>';
            var num = new Number((<HTMLInputElement>document.getElementById('num')).value).valueOf();
            var solution = new Solution3(num);
            var lucky = solution.tryYourLuck();
            if(lucky){
                result += '<H3>BINGO</H3><br>';
            } else {
                result += '<H3>BAD LUCK TRY AGAIN</H3><br>';
            }
            document.getElementById('result3').innerHTML = result;
        }

        executeSolution4 = () => {
            var result:string = '<b>Result:</b><br>';
            var num:string = (<HTMLInputElement>document.getElementById('word')).value;
            var array:string[] = num.split(',');
            var formatedArray:string[];
            var solution = new Solution4(array);
            formatedArray = solution.execute();
            for(var index = 0 ; index<formatedArray.length; index++){
                if((index+1)!==formatedArray.length){
                     result += (formatedArray[index]+", ");
                } else {
                     result += formatedArray[index];
                }
             }
             document.getElementById('result4').innerHTML = result;
            
        }
    }

}

var App = AppModule.BootstrapApplication;
