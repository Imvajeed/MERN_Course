let btn = document.getElementById("myBtn");

let div = document.getElementById('boxDiv')
let input = document.getElementById('myInput')
let list = document.getElementById('list');

btn.addEventListener('click',()=>{
    btn.classList.toggle('click');
})

div.addEventListener('mousedown',()=>{
    div.innerHTML = "moouse clicked";
})

// div.addEventListener('mouseover',()=>{
//     div.innerHTML = "moouse hover";
// })
// div.addEventListener('mouseout',()=>{
//     div.innerHTML = "moouse out";
// })
input.addEventListener('keypress',(key)=>{
    div.innerHTML = `${key.key} is pressed`;
})

list.addEventListener('click',(ele)=>{
    if(ele.target.tagName == 'LI'){
        let name = ele.target.getAttribute('name');
        switch(name){
            case 'home': div.innerHTML = `clicked on Home`;
            break;
            case 'about':div.innerHTML = `clicked on about`;
            break;
            case 'login':div.innerHTML = `clicked on login`;
            break;
            case 'contact':div.innerHTML = `clicked on contact`;
            break;
        }
    }
})