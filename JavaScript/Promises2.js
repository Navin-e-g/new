async function likeCode(){

}
async function commentCode(){

}
async function createPost(){
    var post = new Promise((cPost)=>{
        cPost("Post Created Successfully")
    })
    var [posts ,comment ,like]=await Promise.all(post,commentCode(),likeCode())/*await is an important keyword here*/
}
console.log(posts)
console.log(comment)
console.log(like)