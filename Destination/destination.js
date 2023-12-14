let card_container = document.getElementById("card-container");
let baseURL = "https://mock-api-template-cw-4.onrender.com/destinations"

// fetch data 
async function fetchdata(url){
    try {
      let res= await fetch(`${url}`);
      let data = await res.json();
      createcard (data)
      console.log(data);  
      
    } 
    catch (error) {
    console.log(error)   
    
    }
    }
    fetchdata(baseURL);








// create card 

function createcard (data){
    let maincontainer = document.createElement('div')
    maincontainer.classList = "maincontainer";


data.forEach((temp) => {
    let card = document.createElement('div')
    card.classList = "card";
    
    let nationimg = document.createElement('img');
    nationimg.classList = "nationimage";
    nationimg.src = temp.nationImg;



    let tourbtn = document.createElement('button');
    tourbtn.innerText = "3 tours";
    
    let nationHeading = document.createElement('h3');
    nationHeading.textContent = temp.nationName;
    
    let nationContent = document.createElement('p');
    nationContent.textContent = temp.nationContent;
    
    let viewbtn = document.createElement('button');
    viewbtn.innerText = "View All Tours";

   // nationimg.append(tourbtn, nationHeading, nationContent, viewbtn);
    card.append(nationimg);
    card.append(tourbtn, nationHeading, nationContent, viewbtn);
    maincontainer.append(card);


})
card_container.append(maincontainer)
  
}