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



form.addEventListener("submit", function (e){
    e.preventDefault();
    const nameVal=e.target.name.value;
    const commentVal=e.target.comment.value;
    commentsArr.unshift({
        name: nameVal,
        text: commentVal,
    });
    displayComments();
    e.target.reset();
});







    
    
    for (let i=0; i<commentsArr.length; i++){
       
        const divWrapper=document.createElement("div");
        divWrapper.classList.add("comments__wrapper");
        const divImg= document.createElement("div");
        const divComment=document.createElement("div");
        divImg.classList.add("comments__wrapper--left-no-img");
        divComment.classList.add("comments__wrapper--right");
        commentSection.appendChild(divWrapper);
        divWrapper.appendChild(divImg);
        divWrapper.appendChild(divComment);
        const divNameDate=document.createElement("div");
        divNameDate.classList.add("comments__wrapper-name-date")
        const divText=document.createElement("div");
        divComment.appendChild(divNameDate);
        divComment.appendChild(divText);

        const headerName=document.createElement("h3");
        divNameDate.appendChild(headerName);
        headerName.innerText=commentsArr[i].name;

        const date=document.createElement("p");
        date.innerText=commentsArr[i].date;
        divNameDate.appendChild(date);

        const content=document.createElement("p");
        content.innerText=commentsArr[i].text;
        divText.appendChild(content);
    
    };
    



