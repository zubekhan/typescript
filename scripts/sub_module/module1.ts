export module Module1 {

 export class Solution1 {

    constructor(private num: number){ }

    // Generate Even Number for problem statement 1
    generateEven = (): number[] => {
        var temp = this.num;
        var result: number[] = [];
        while(temp!==0){
            if(temp%2===0){
                result.push(temp);
                }
            temp--;
            }   
        result.sort((x,y)=>{return x-y});
        return result;
        }

    }
}