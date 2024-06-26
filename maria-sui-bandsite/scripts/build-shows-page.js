

    // shows page main section

    const main = document.querySelector("main");
    const mainHeader = document.createElement("h2");
    main.classList.add("main");
    mainHeader.classList.add("main__title");
    mainHeader.innerText="Shows";
    main.appendChild(mainHeader);


    const ul = document.createElement("ul");
    ul.classList.add("main__list");
    main.appendChild(ul);

//function retrieve shows data    

function showsData(){
    axios
    .get("https://project-1-api.herokuapp.com/showdates?api_key=c8a23e5a-96f4-4b41-bc3e-a5f97cb8f66a")
    .then(response=>{
        shows(response.data);
    })
}
showsData()


/*
function to loop through each show
and assign elements, classes, append, etc.
*/
function shows(showsArray){
   showsArray.forEach(show => {
            
    const li= document.createElement("li");
    li.classList.add("main__item");

    let date = document.createElement("h3");
    date.classList.add("main__item-title");
    date.classList.add("main__item-title--disappear");

    let place= document.createElement("h3");
    place.classList.add("main__item-title");
    place.classList.add("main__item-title--disappear");

    let location= document.createElement("h3");
    location.classList.add("main__item-title");
    location.classList.add("main__item-title--disappear");

    let dateContent= document.createElement("p");
    dateContent.classList.add("main__item-detail");
    dateContent.classList.add("main__item-detail--bold");

    let placeContent= document.createElement("p");
    placeContent.classList.add("main__item-detail");

    let locationContent= document.createElement("p");
    locationContent.classList.add("main__item-detail");

            
    date.innerText= "Date";
    place.innerText= "Venue";
    location.innerText= "Location";
    showDate=new Date(show.date);
    dateContent.innerText= showDate.toDateString();
    placeContent.innerText=show.place;
    locationContent.innerText=show.location;

    li.appendChild(date);
    li.appendChild(dateContent);
            
    li.appendChild(place);
    li.appendChild(placeContent);

    li.appendChild(location);
    li.appendChild(locationContent);

    const button= document.createElement("button");
    button.classList.add("main__cta-button");
    button.innerText="Buy Tickets";
    li.appendChild(button);
        
    ul.appendChild(li);
    });
    
};

    // adding hover and select state for shows

    const li=document.querySelectorAll(".main__item");
    li.forEach(element => {
        element.addEventListener("click", ()=>{
            document.querySelector(".main__item--active")?.classList.remove("main__item--active");
            element.classList.add("main__item--active");
        });
    });



