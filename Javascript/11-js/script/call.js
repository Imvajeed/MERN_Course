console.log("Script kiddie");



function one(n){
    return n+1;
}

function two(num1,one){
    return num1+one(num1);
}

function output(value){
    let sum = two(value,one);

    console.log(sum);
}

setTimeout(()=>{
    output(5);
},3000);

console.log("I am last");