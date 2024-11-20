console.log("Problem - 07");

let num = 106;

function sumOfNum(num){
    let sumnum = 0;
    while(num){
        let tmp = num%10;
        sumnum += tmp;
        num=parseInt(num/10);
    }
    return sumnum;
}

console.log(sumOfNum(num));