

// site-main section

const main = document.querySelector("main");
const mainHeader = document.createElement("h2");
main.classList.add("main");
mainHeader.classList.add("main__title");
mainHeader.innerText="Shows";
main.appendChild(mainHeader);

let showsArr = [
    {
        date: "Mon Sept 06 2021",
        venue: "Ronald Lane",
        location: "San Francisco, CA"
    },
    {
        date:"Tue Sept 21 2021",
        venue: "Pier 3 East",
        location:"San Francisco, CA"
    },
    {
        date:"Fri Oct 15 2021",
        venue:"View Lounge",
        location:"San Francisco, CA"
    },
    {
        date:"Sat Nov 06 2021",
        venue:"Hyatt Agency",
        location:"San Francisco, CA"
    },
    {
        date:"Fri Nov 26 2021",
        venue:"Moscow Center",
        location:"San Francisco, CA"
    },
    {
        date:"Wed Dec 15 2021",
        venue:"Press Club",
        location:"San Francisco, CA"
    }
]
    const ul = document.createElement("ul");
    ul.classList.add("main__list");
    main.appendChild(ul);

    for(let i=0; i<showsArr.length; i++){
        let show=showsArr[i];
        const li= document.createElement("li");
        li.classList.add("main__item");

        let date = document.createElement("h3");
        date.classList.add("main__item-title");
        date.classList.add("main__item-title--disappear");

        let venue= document.createElement("h3");
        venue.classList.add("main__item-title");
        venue.classList.add("main__item-title--disappear");

        let location= document.createElement("h3");
        location.classList.add("main__item-title");
        location.classList.add("main__item-title--disappear");

        let dateContent= document.createElement("p");
        dateContent.classList.add("main__item-detail");
        dateContent.classList.add("main__item-detail--bold");

        let venueContent= document.createElement("p");
        venueContent.classList.add("main__item-detail");

        let locationContent= document.createElement("p");
        locationContent.classList.add("main__item-detail");

        
        date.innerText= "Date";
        venue.innerText= "Venue";
        location.innerText= "Location";
        dateContent.innerText= show.date;
        venueContent.innerText=show.venue;
        locationContent.innerText=show.location;

        li.appendChild(date);
        li.appendChild(dateContent);
        
        li.appendChild(venue);
        li.appendChild(venueContent);

        li.appendChild(location);
        li.appendChild(locationContent);

        const button= document.createElement("button");
        button.classList.add("main__cta-button");
        button.innerText="Buy Tickets";
        li.appendChild(button);
       
        ul.appendChild(li);
    }

//    const li=document.getElementsByClassName("main__item");
//    li.addEventListener("click",function () {
//            li.style.backgroundColor = "black";
//     });

       




