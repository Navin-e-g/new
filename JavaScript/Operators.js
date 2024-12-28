//assignment operators
a=10
b=20
//arithmetic operators
c=a+b
//relational operators
if(a>b){
    console.log("a is greatest")
}
else{
    console.log("b is greatest")
}
//Logical operators
if(a>b && a>c){
    console.log("a is greatest")
}
else if(b>c){
    console.log("b is greatest")
}
else{
    console.log("c is greatest")
}
//bitwise operators
console.log(a^b)
//unary operators
console.log(++a)
//ternary operators
d=a>b?a:b;
console.log(d)