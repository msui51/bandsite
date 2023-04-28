const comments=document.querySelector(".comments");
const parentWrapper=document.createElement("div");
parentWrapper.classList.add("comments__wrapper-all");
comments.appendChild(parentWrapper);

axios
.get("https://project-1-api.herokuapp.com/comments?api_key=c8a23e5a-96f4-4b41-bc3e-a5f97cb8f66a")
.then(response=>{
    displayComments(response.data);
});



function displayComments(commentsArray){    
    parentWrapper.innerText='';

    for (let i=0; i<commentsArray.length; i++){
       
        const childWrapper=document.createElement("div");
        childWrapper.classList.add("comments__wrapper");
        parentWrapper.appendChild(childWrapper);

        const img= document.createElement("div");
        img.classList.add("comments__wrapper-no-img");
        childWrapper.appendChild(img);

        const content=document.createElement("div");
        content.classList.add("comments__wrapper--right");
        childWrapper.appendChild(content);

        const nameDate=document.createElement("div");
        nameDate.classList.add("comments__wrapper-name-date");
        content.appendChild(nameDate);

        const headerName=document.createElement("h3");
        headerName.innerText=commentsArray[i].name;
        nameDate.appendChild(headerName);

        const date=document.createElement("p");
        date.classList.add("comments__date");
        commentTime=new Date(commentsArray[i].timestamp);
        date.innerText=commentTime.toLocaleDateString();
        nameDate.appendChild(date);

        const paragraph=document.createElement("p");
        paragraph.classList.add("comments__paragraph");
        paragraph.innerText=commentsArray[i].comment;
        content.appendChild(paragraph);
    
    };
};  


const form=document.querySelector("form");
form.addEventListener("submit", function(e){
    e.preventDefault();
    const nameVal=e.target.name.value;
    const commentVal=e.target.textarea.value;
    // const currentTime=new Date();
    const input=document.getElementById("name");
    const textarea=document.getElementById("textarea");
    const formData= new FormData(form);
    axios
        .post("https://project-1-api.herokuapp.com/comments?api_key=c8a23e5a-96f4-4b41-bc3e-a5f97cb8f66a", formData)
        .then(response =>{
            response.data.unshift({
                name: nameVal,
                comment: commentVal,
            });
            displayComments(response);
        })
        .catch(error=>{
            if (commentVal==="" || nameVal===""){
                input.style.border="1px solid #D22D2D";
                textarea.style.border="1px solid #D22D2D";
                e.target.reset();
                console.log(Response.StatusCode=400);
            }
        })
});
// form.addEventListener("submit", function (e){
//     e.preventDefault();
//     const nameVal=e.target.name.value;
//     const commentVal=e.target.textarea.value;
//     const currentTime=new Date();
//     const input=document.getElementById("name");
//     const textarea=document.getElementById("textarea");
//     if (commentVal==="" || nameVal===""){
//         input.style.border="1px solid #D22D2D";
//         textarea.style.border="1px solid #D22D2D";
//         e.target.reset();
//     }else {
//         response.data.unshift({
//             name: nameVal,
//             comment: commentVal,
//             timestamp: currentTime.getDate()+"/"+(currentTime.getMonth()+1)+"/"+currentTime.getFullYear()
//         });
//         input.style.border="1px solid #e1e1e1";
//         textarea.style.border="1px solid #e1e1e1";
//         displayComments();
//         e.target.reset();
//     };
// }); 


