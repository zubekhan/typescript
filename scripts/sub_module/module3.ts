export module Module3 {

 export class Solution3 { 

        private randomArray: number[] = [];

        constructor(private num:number) {
            this.randomArray = this.init();
         }

         // to initilize the array of five random values ranging from 1 to 50
        private init = (): number[] => {
            var array: number[] = [];
            for(var i=0;i<5;i++){
                array.push(this.getRandomNumber(1,50));
            }
            console.log(array);
            return array;
        }

        // to generate a random number ranging from 1 to 50
        private getRandomNumber = (min:number,max:number): number => {
            return (Math.floor(Math.random() * (max - min + 1)) + min);
        }

        // to check if given number is present in random array
        tryYourLuck = (): boolean => {
            if(this.num !== undefined){
                if(this.randomArray.indexOf(this.num) > -1) {
                    return true;
                    }
            } else{
                throw 'Number is empty';
            }
            return false;
        }

    }
}