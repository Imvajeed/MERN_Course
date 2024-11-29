console.log("Script kiddie");

let promise = new Promise(
    (success,failure)=>{
        let response_code = 200;
        if(response_code==200){
            setTimeout(()=>{
                success("Everything is Okay");
            },2000);
        }else{
            setTimeout(()=>{
                failure("Something went wrong");
            },3000);
        }
        
        
    }
)

promise.then(
    (success)=>{
        console.log(success);
    },
    (failure)=>{
        console.log(failure);
    }
)

console.log("I am Last");