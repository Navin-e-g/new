train=9
async function arrivalTime(){
    return new Promise((resolve,reject)=>{
        if(train==8){
            resolve("Train Arrived On Time")
        }
        else{
            reject("Train is Late")
        }
    })
}
arrivalTime().then((a)=>{
    console.log(a)
}).catch((b)=>{
    console.log(b)
})