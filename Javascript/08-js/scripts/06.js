console.log("Problem-06");

let num = 102;

function revNum(num){
    let revnum = 0;

    while(num){
        let tmp = num%10;
        revnum = (revnum*10)+tmp;
        num = parseInt(num/10);
    }
    return revnum;
}

console.log(revNum(num));