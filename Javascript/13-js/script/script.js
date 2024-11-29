let getId = document.getElementById("myId");
let getCl = document.getElementsByClassName("myClass");
let ele = document.getElementsByTagName("h1");
let qur = document.querySelector('h1');
let qur2 = document.querySelectorAll('h1');

// console.log(getClass);
console.log(qur2);
console.log(qur);

for(let i =0;i< ele.length;i++){
    console.log(ele[i].innerText);
}


getId.innerText = "Script kiddie";
for(let i =0;i< getCl.length;i++){
    console.log(getCl[i].innerText);
}