export module Module2 {

    export class Solution2 {

        private sum: number = 0;
        private avg: number = 0;

        constructor(private array:number[]){}

        getSum = (): number => {
            for(var num of this.array){
                this.sum += num;
            }
            return this.sum;
        }

        getAvg = (): number => {
            return (this.avg = this.sum / this.array.length);
        }

        getAvgLessValue = (): number[] => {
            var array:number[] = [];
            for(var num of this.array){
                if(num<this.avg){
                    array.push(num);
                }
            }
            return array;
        }

    }

}