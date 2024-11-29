console.log("Share the video");
let objAPI = {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
}

let url = "https://jsonplaceholder.typicode.com/posts";

// async function getData(url,obj) {
//     let data = await fetch(url,obj);
//     return data;
// }


// getData(url,objAPI).then((prom) => {
//     return prom.json();
// }).then((response) => {
//     console.log(response);
// }).catch((e) => {
//     console.log("Something went wrong");
// })


let a = fetch(url,objAPI);

a.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
})