let card_container = document.getElementById("card-container");


// fetch data 
function fetchdata(){

}











// create card 

function createcard (){
   

let card = document.createElement('div')
card.classList = "card";

let nationimg = document.createElement('img');
nationimg.classList = "nationimage";

let tourbtn = document.createElement('button');
tourbtn.innerText = "3 tours";

let nationHeading = document.createElement('h3');
nationHeading.textContent = temp.nationName;

let nationContent = document.createElement('p');
nationContent.textContent = temp.nationContent;

let viewbtn = document.createElement('button');
viewbtn.innerText = "View All Tours";


    
}