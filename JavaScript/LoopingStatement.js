arr=[10,20,30,[5.5,6.4],"hello",true,40]
console.log(arr)

for (var i in arr){
    console.log("the element in index",i,"is",arr[i])
}

for(var j of arr){
    console.log(j)
}