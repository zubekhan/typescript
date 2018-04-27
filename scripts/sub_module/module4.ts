export module Module4 {

    export class Solution4 {
        
        constructor(private array: string[]){ }
        
        // reverse and sort array alphabeticall order
        execute = (): string[] => {
            var result:string[];
            if(this.array.length>0){
                result = this.array.reverse().sort();
            } else {
                throw 'No value in array';
            }
            return result;
        }

    }

}