//type1 with arguement with return type
const add=(a,b)=>{
    return a+b
}
console.log(add(10,9))
//type2 with arguement without return type
const sub=(a,b)=>{
    console.log(a-b)
}
sub(10,5)
//type3 without arguement with return type
let a=10
let b=6
const mul=()=>{
    return a*b
}
console.log(mul())
//type3 without arguement without return type
a=28
b=7
const div=()=>{
    console.log(a/b)
}
div()