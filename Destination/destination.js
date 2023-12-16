let card_container = document.getElementById("card-container");
let baseURL = "https://mock-api-template-cw-4.onrender.com/destinations"

// fetch data 
async function fetchdata(url) {
    try {
        let res = await fetch(`${url}`);
        let data = await res.json();
        createcard(data)
        console.log(data);

    }
    catch (error) {
        console.log(error)

    }
}
fetchdata(baseURL);








// create card 

function createcard(data) {
    let maincontainer = document.createElement('div')
    maincontainer.classList = "maincontainer";


    data.forEach((temp) => {
        let nationcard = document.createElement('div')
        nationcard.classList = "nationcard";

        let nationimg = document.createElement('img');
        nationimg.classList = "nationimage";
        nationimg.src = temp.nationImg;



        let tourbtn = document.createElement('button');
        tourbtn.classList = "tourbtn"
        tourbtn.innerText = "3 tours";

        let nationHeading = document.createElement('h3');
        nationHeading.classList = "nationHeading"
        nationHeading.textContent = temp.nationName;

        let nationContent = document.createElement('p');
        nationContent.classList = "nationContent"
        nationContent.textContent = temp.nationContent;

        let viewbtn = document.createElement('button');
        viewbtn.classList = "viewbtn"
        viewbtn.innerText = "View All Tours";
        viewbtn.addEventListener("click", (e) => {

            populatedata(temp);
            countrydata(baseURL);


        })

        // nationimg.append(tourbtn, nationHeading, nationContent, viewbtn);
        nationcard.append(nationimg);
        nationcard.append(tourbtn, nationHeading, nationContent, viewbtn);
        maincontainer.append(nationcard);


    })
    card_container.append(maincontainer)

}


// next page 

function populatedata(temp) {
    // seting  nation card id to lacal storage
    localStorage.setItem("cardid", temp.id);
}



// next page //  country card 

let countrycardcontainer = document.getElementById("countrycardcontainer");

function countrydata(url) {
    let dataretuen = localStorage.getItem("cardid")
    fetch(`${url}/${dataretuen}`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            countrycard(data)
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        })
}
//countrydata(baseURL)


// country card 


function countrycard(data) {

    countrycardcontainer.innerHTML = "";

    let countrycontainer = document.createElement("div");
    countrycontainer.classList = "countrycontainer";

    data.contries.forEach((temp) => {
        let countrycard = document.createElement('div')
        countrycard.classList = "countrycard";

        let countryimage = document.createElement('img');
        countryimage.classList = "countryimage";
        countryimage.src = temp.countryImg;

        let countryName = document.createElement('h2');
        countryName.classList = "countryName"
        countryName.textContent = temp.countryName;

        let TouristPlace = document.createElement('p');
        TouristPlace.classList = "TouristPlace"
        TouristPlace.textContent = temp.TouristPlace;

        let price = document.createElement('h2');
        price.classList = "countryprice"
        price.textContent = temp.price;


        let booknow = document.createElement('button');
        booknow.classList = "booknow"



        let ank = document.createElement('a');
        ank.innerText = "Book Now";
        ank.classList = "ank"
        ank.href = "../Booking/booking.html";


        booknow.append(ank);
        countrycard.append(countryimage, countryName, TouristPlace, price, booknow);
        countrycontainer.append(countrycard);

    })

    countrycardcontainer.append(countrycontainer);


}