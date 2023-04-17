// comments array

let commentsArr =[
    {
        name:"Connor Walton",
        text:"This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
        date: "02/17/2021",
    },
    {
        name:"Emilie Beach",
        text:"I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
        date: "01/09/2021",
    },
    {
        name:"Miles Acosta",
        text:"I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
        date: "12/20/2020",
    }
];

//main page comment section

const comments=document.querySelector(".comments");
const parentWrapper=document.createElement("div");
parentWrapper.classList.add("comments__wrapper-all");
comments.appendChild(parentWrapper);


function displayComments(){    
    parentWrapper.innerText='';
    for (let i=0; i<commentsArr.length; i++){
       
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
        headerName.innerText=commentsArr[i].name;
        nameDate.appendChild(headerName);

        const date=document.createElement("p");
        date.classList.add("comments__date");
        date.innerText=commentsArr[i].date;
        nameDate.appendChild(date);

        const paragraph=document.createElement("p");
        paragraph.classList.add("comments__paragraph");
        paragraph.innerText=commentsArr[i].text;
        content.appendChild(paragraph);
    
    };
};  
displayComments();  

const form=document.querySelector("form");
form.addEventListener("submit", function (e){
    e.preventDefault();
    const nameVal=e.target.name.value;
    const commentVal=e.target.textarea.value;
    const currentTime=new Date();
    const input=document.getElementById("name");
    const textarea=document.getElementById("textarea");
    if (commentVal==="" || nameVal===""){
        input.style.border="1px solid #D22D2D";
        textarea.style.border="1px solid #D22D2D";
        e.target.reset();
    }else {
        commentsArr.unshift({
            name: nameVal,
            text: commentVal,
            date: currentTime.getDate()+"/"+(currentTime.getMonth()+1)+"/"+currentTime.getFullYear()
        });
        input.style.border="1px solid #e1e1e1";
        textarea.style.border="1px solid #e1e1e1";
        displayComments();
        e.target.reset();
    };
});


