console.log("Script Kidde");

// function displayName(name,age)
// {
//     console.log(name,age);
    
//     return age+10;
// }

// let a = displayName("Vajeed",24);
// let b = displayName("Shashi",22);
// let c = displayName("Rahul",7);

// console.log(a);
// console.log(b);
// console.log(c);

// function returnOne(one){
//     if(one==1){
//         return 1;
//     }else{
//         return returnOne(one-1);
//     }
// }

// let a = returnOne(10);
// console.log(a);

function fact(num){
    if(num<=1){
        return 1;
    }else{
        return num*fact(num-1);
    }
}

let a = fact(5);
console.log(a);