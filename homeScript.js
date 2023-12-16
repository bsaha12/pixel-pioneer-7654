


// video section  



let videoBtn=document.querySelectorAll(".vid-btn");


videoBtn.forEach(btn =>{
    btn.addEventListener('click',()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src= btn.getAttribute('data-src');
        document.querySelector('#video-slider').src= src;
    });
});

// the destinations cards

const baseUrl=`https://mock-api-template-cw-4.onrender.com/destinations`;
let data;
const itemsPerPage = 3;
//let currentPage = 1;
async function fetchData(url, condition, page) {
    try {
      let response = await fetch(
        `${url}?${condition || ""}_page=${page || 1}&_limit=3`
      );
      let totalData = response.headers.get("X-Total-Count");
      let noOfButtons = Math.ceil(totalData / 5);
      renderPagination(noOfButtons, condition);
      let data = await response.json();
  
      renderData(data);
      console.log(data);
    } catch (error) {
      console.log("Error:", error);
    }
  }
  
  fetchData(baseUrl);
const mainSection = document.getElementsByClassName('HomeDestCards')[0];
const paginationContainer=document.getElementById('pagination');
function renderData(data) {
    mainSection.innerHTML = "";
    data.forEach(homeCardData => {
      const homeCard = createHomeCard(homeCardData);
      mainSection.appendChild(homeCard);
    });
  }
  
  function createHomeCard(homeCardData) {
    const homeCard = document.createElement('div');
    homeCard.classList.add('homeCard'); // Updated class name
  
    const image = document.createElement('img');
    image.src = homeCardData.nationImg;
    image.alt = homeCardData.nationName;
    homeCard.appendChild(image);
  
    const title = document.createElement('h4');
    title.textContent = homeCardData.nationContent;
    homeCard.appendChild(title);
  
    const locationDiv = document.createElement('div');
    var imgPath = "./homeImages/locationIcon.png";
    locationDiv.classList.add('locationWithIcon');
    const locImg = document.createElement('img');
    locImg.src = imgPath;
    locImg.alt = "icon";
  
    locationDiv.appendChild(locImg);
  
    const locationText = document.createElement('span');
    locationText.textContent = homeCardData.nationName;
    locationDiv.appendChild(locationText);
  
    homeCard.appendChild(locationDiv);
    return homeCard;
  }
 

 function renderPagination(num,query) {
   
    paginationContainer.innerHTML = "";
  
    for (let i = 1; i <= num; i++) {
      const pageButton = document.createElement('button');
      pageButton.textContent = i;
  
      // Use a closure to capture the correct value of i
      pageButton.addEventListener('click', ()=> {
          //currentPage = index;
          //renderData(data);
          fetchData(baseUrl,query,i);
          //renderPagination(data,i);
        }
      );
  
      paginationContainer.appendChild(pageButton);
    }
  }
  

  
  
