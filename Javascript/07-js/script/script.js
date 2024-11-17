console.log("Script kiddie");

let subject = ['SE','AI','DS','Project'];
let vajeed = [89,90,86,149];
let Vijay = [89,90,56,149];
let Arun = [80,70,86,149];

let shashi = new Array(80,70,86,149);

let size = shashi.length;
console.log(size);

// for(let i = 0; i< size; i++){
//     console.log(subject[i],": ",shashi[i]);
// }

// for(let i = 0; i< size; i++){
//     console.log(subject[i],": ",vajeed[i]);
// }

// vajeed.forEach((item,index)=>{
//     console.log(subject[index],": ",item);
// })

let fruits = ['apple','banana','tomato'];
console.log(fruits);

fruits.pop();

console.log(fruits);

fruits.push('orange');
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.unshift('apple');
console.log(fruits);

let mp = fruits.map((item,index)=>{
    {item,index}
});

console.log(mp);
