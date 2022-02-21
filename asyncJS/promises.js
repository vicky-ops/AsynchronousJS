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
function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);

            const error=false;
            
            if(!error){
                resolve()
            }else{
                reject('Error: Something went wrong')
            }
        },2000)
    })
    
}


// createPost({title:"Post Three",body:"This is post three"})
//     .then(getPosts)
//     .catch((error)=>console.log(error))


// Async and Await

// async function init(){
//     await createPost({title:"Post Three",body:"This is post three"})

//     getPosts();
// }

// init()

// Async and await with fetch

async function todos(){
    const user1todos=await fetch("https://jsonplaceholder.typicode.com/users/1/todos");
    const resTodos= await user1todos.json();

    console.log(resTodos)
}

todos()








// const promise1=fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
//     .then(res=>res.json())
//     .then(data=>displayImages(data))


// function displayImages(data){
//    data.forEach((dataImage)=>{
//        const image=document.createElement("img");
//        image.src=dataImage.url
//        document.body.appendChild(image)
//    })
// }