// javascript for index.html
const blogsDv = document.querySelector('.blogs');



const url = "http://localhost:3000/blogs";

fetchBlogs();

async function fetchBlogs(){
    let data = await fetch(url);
    let blogs = await data.json();

    printBlogs(blogs)
}

function printBlogs(blogData){
    blogData.forEach(item =>{
        let containerB = document.createElement('div');
        containerB.classList.add('blog');

        containerB.innerHTML = `
        <h2>${item.title}</h2>
        <p>${item.body}</p>
        `;
        
        blogsDv.appendChild(containerB);

    })
}
