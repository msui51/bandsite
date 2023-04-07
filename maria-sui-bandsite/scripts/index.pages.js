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
]


const parentWrapper=document.createElement("div");
const comments=document.querySelector(".comments");
comments.appendChild(parentWrapper);


function displayComments(){    
    parentWrapper.innerText='';
    for (let i=0; i<commentsArr.length; i++){
       
        const childWrapper=document.createElement("div");
        childWrapper.classList.add("comments__wrapper");
        const img= document.createElement("div");
        const content=document.createElement("div");
        img.classList.add("comments__wrapper-no-img");
        content.classList.add("comments__wrapper--right");
        parentWrapper.appendChild(childWrapper);
        childWrapper.appendChild(img);
        childWrapper.appendChild(content);
        const nameDate=document.createElement("div");
        nameDate.classList.add("comments__wrapper-name-date")
        const divText=document.createElement("div");
        content.appendChild(nameDate);
        content.appendChild(divText);

        const headerName=document.createElement("h3");
        nameDate.appendChild(headerName);
        headerName.innerText=commentsArr[i].name;

        const date=document.createElement("p");
        date.innerText=commentsArr[i].date;
        nameDate.appendChild(date);

        const paragraph=document.createElement("p");
        paragraph.innerText=commentsArr[i].text;
        divText.appendChild(paragraph);
    
    };
};  
displayComments();  

const form=document.querySelector("form");

form.addEventListener("submit", function (e){
    e.preventDefault();
    const nameVal=e.target.name.value;
    const commentVal=e.target.textarea.value;
    if (nameVal.length===0){
        const nameInputForm=document.querySelector(".comments__input--name");
        nameInputForm.style.border="1px solid #D22D2D";
    }else{
        commentsArr.unshift({
        name: nameVal,
        text: commentVal,
        date: Date.now()
    })};
    displayComments();
    e.target.reset();
});


