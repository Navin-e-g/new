async function fun(){
    setTimeout(()=>{
        console.log("Hello");
    },5000)
    return "thankyou"

}

arrowFun=async()=>{
    setTimeout(()=>{
        console.log("KEC")
    },5000)
    return "placements"
}

fun().then((a)=>{
    console.log(a)
})
arrowFun().then((b)=>{
    console.log(b)
})