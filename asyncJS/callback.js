const posts=[
    {title:"Post One",body:"This is post One"},
    {title:"Post two",body:"This is post two"}
]

function getPosts(){
    setTimeout(()=>{
        let output="";
        posts.forEach((post)=>{
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML=output
    },3000)
}

//callback
function createPost(post,callback){
    setTimeout(()=>{
        posts.push(post)
        callback()
    },2000)
}


// getPosts()
createPost({title:"Post Three",body:"This is post three"},getPosts)