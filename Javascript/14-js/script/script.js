let mainDiv = document.getElementById("main");
let listUl = document.getElementById("list");
let itemLi = document.getElementById("secndItem");
let emptyDiv = document.getElementById('empty');
let childs = mainDiv.childNodes;

// console.log(mainDiv.lastChild)

// console.log(listUl.parentNode);

// console.log(itemLi.nextElementSibling);

let ulElement = document.createElement('ol');

ulElement.setAttribute('class','myClass')
ulElement.setAttribute('id','myId')

for(let i = 0; i < 4; i++){
    ulElement.innerHTML += `<li> ${i} </li>`;
}

emptyDiv.appendChild(ulElement);

mainDiv.removeChild(listUl);


alert("You have been hacked");
let b = confirm("this website need your location");
let a = prompt("Enter your name");

console.log(a);
console.log(b);
