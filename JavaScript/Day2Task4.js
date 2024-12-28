let a=10
let b=5
add=()=>{
    console.log(a+b)
}
function display(msg,fun){
    console.log(msg)
    fun()
}
display("the sum is",add)