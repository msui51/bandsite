const comments=document.querySelector(".comments");
const parentWrapper=document.createElement("div");
parentWrapper.classList.add("comments__wrapper-all");
comments.appendChild(parentWrapper);

// function to retrieve comment data

function getData(){
    axios
    .get("https://project-1-api.herokuapp.com/comments?api_key=c8a23e5a-96f4-4b41-bc3e-a5f97cb8f66a")
    .then((comments)=>{
        
        displayComments(comments.data.sort((a,b)=>
            b.timestamp - a.timestamp));
        
    });
};
getData();


/* 
function to loop through each comment to display
and add ability to like and delete each comment
*/

function displayComments(comments){    
    parentWrapper.innerText='';
    
    for (let i=0; i<comments.length; i++){
       
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
            headerName.innerText=comments[i].name;
            nameDate.appendChild(headerName);

            const date=document.createElement("p");
            date.classList.add("comments__date");
            commentTime=new Date(comments[i].timestamp);
            date.innerText=commentTime.toLocaleDateString();
            nameDate.appendChild(date);

            const paragraph=document.createElement("p");
            paragraph.classList.add("comments__paragraph");
            paragraph.innerText=comments[i].comment;
            content.appendChild(paragraph);

            const likeAndDeleteWrapper=document.createElement("div");
            likeAndDeleteWrapper.classList.add("comments__buttons-wrapper");
            content.appendChild(likeAndDeleteWrapper);

            const likeButton=document.createElement("button");
            likeButton.classList.add("comments__button-like-and-delete");
            likeButton.classList.add("like");
            likeButton.innerText="LIKE";
            likeAndDeleteWrapper.appendChild(likeButton);

            const deleteButton=document.createElement("button");
            deleteButton.classList.add("comments__button-like-and-delete");
            deleteButton.classList.add("delete");
            deleteButton.innerText="DELETE";
            likeAndDeleteWrapper.appendChild(deleteButton);

        //.put method to like a comment

            let idNum=comments[i].id;    
            const like=document.querySelectorAll(".like")
            like[i].addEventListener("click", function(e){  
            e.preventDefault();
            axios
            .put(`https://project-1-api.herokuapp.com/comments/${idNum}/like/?api_key=c8a23e5a-96f4-4b41-bc3e-a5f97cb8f66a`)
            .then(response=>{
                getData();
                console.log(response);
            })
            .catch(error=>{
                console.log(error);
            })
        });

        //.delete method to delete a comment

            const deleteComment=document.querySelectorAll(".delete")
            deleteComment[i].addEventListener("click", function(e){  
            e.preventDefault();
            axios
            .delete(`https://project-1-api.herokuapp.com/comments/${idNum}/?api_key=c8a23e5a-96f4-4b41-bc3e-a5f97cb8f66a`)
            .then(response=>{
                const deleteCommentFunction=(id)=>{
                    comments.filter((comment)=>comments.id !== id);
                }
                deleteCommentFunction(comments.id);
                getData();
                console.log(response);
            })
            .catch(error=>{
                console.log(error);
            })
        });
    };
};

//event listener to add a new comment

const form=document.querySelector("form");
form.addEventListener("submit", function(e){
    e.preventDefault();
    const nameVal=e.target.name.value;
    const commentVal=e.target.comment.value;
    const input=document.getElementById("name");
    const textarea=document.getElementById("comment");
    if (commentVal=="" || nameVal==""){
            input.style.border="1px solid #D22D2D";
            textarea.style.border="1px solid #D22D2D";
            e.target.reset();
            alert("404 error code");
            return;
        };
        axios
        .post("https://project-1-api.herokuapp.com/comments?api_key=c8a23e5a-96f4-4b41-bc3e-a5f97cb8f66a",{
           name: nameVal,
           comment: commentVal
        })
        .then(response=>{
            input.style.border="1px solid #e1e1e1";
            textarea.style.border="1px solid #e1e1e1";
            getData();
        })
        .catch(error=>{
           
            console.log('error');
        })
    
    e.target.reset();
});




