console.log("Problem -10");

let arr = [5,3,2,1,9];

// for(let i = arr.length; i >= 0;i--){
//     console.log(arr[i]);
// }

console.log(arr);

let start = 0;
let end = arr.length-1;
while(start<end){
    let tmp = arr[start];
    arr[start] = arr[end];
    arr[end] = tmp;
    start++;
    end--;
}

console.log(arr);

