console.log("Try and catch");

let num1 = 55;
let num2 = 0;


// try{
//     console.log(divison(num1,num2));
//     console.log("I am iron man");
// }catch(e){
//     console.log(e);
// }finally{
//     console.log("I am Thanos");
// }

console.log(divison(num1,num2));
console.log("I am Thanos");

function divison(num1,num2){
    if(num2==0){
       throw new Error("Can't divide by zero");
    }else{
        return num1/num2;
    }
}