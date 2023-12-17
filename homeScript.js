// pop up js
document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popupBox");
  const closeBtn = document.getElementById("closePopupBtn");
  const loginBtn = document.getElementById("loginBtn");
  const signupBtn = document.getElementById("signupBtn");

  // Function to check scroll position and show the popup
  function checkScrollPosition() {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;

      // Adjust the scroll position threshold as needed
      const scrollThreshold = 500;

      if (scrollPosition > scrollThreshold) {
          popup.style.display = "block";
      } else {
          popup.style.display = "none";
      }
  }

  // Event listener for the close button
  closeBtn.addEventListener("click", function () {
      popup.style.display = "none";
      window.removeEventListener("scroll", checkScrollPosition);
  });

  // Event listener for the login button
  loginBtn.addEventListener("click", function () {
      window.location.href="login-signup/login.html";
      console.log("Redirecting to login page...");
  });

  // Event listener for the signup button
  signupBtn.addEventListener("click", function () {
    window.location.href="login-signup/signup.html";
      console.log("Redirecting to signup page...");
  });

  // Event listener for scrolling
  window.addEventListener("scroll", checkScrollPosition);

  // Close the popup if the user clicks outside of it
  window.addEventListener("click", function (event) {
      if (event.target === popup) {
          popup.style.display = "none";
          window.removeEventListener("scroll", checkScrollPosition);
      }
  });
});




// video section  
const videoContainer = document.querySelector('.video-container');
const videoSlider = document.getElementById('video-slider');
const vidBtns = document.querySelectorAll('.vid-btn');

// Add event listeners to video buttons
vidBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const src = btn.getAttribute('data-src');
        videoSlider.src = src;
        videoContainer.classList.add('hide');
        setTimeout(() => {
            videoContainer.classList.remove('hide');
        }, 500);

        vidBtns.forEach((btn) => btn.classList.remove('active'));
        btn.classList.add('active');
    });
});


// the destinations cards

const baseUrl=`https://mock-api-template-cw-4.onrender.com/destinations`;

const itemsPerPage = 3;
//let currentPage = 1;
async function fetchData(url, condition, page) {
    try {
      let response = await fetch(
        `${url}?${condition || ""}_page=${page || 1}&_limit=3`
      );
      let totalData = response.headers.get("X-Total-Count");
      let noOfButtons = Math.ceil(totalData / 3);
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
    homeCard.addEventListener('click', () => {
      window.location.href = "../Booking/booking.html";
    });

    return homeCard;
  }
   
//   const linkCard = document.querySelector('.homeCard');

// linkCard.addEventListener('click', () => {
//   var bookLink="./Booking/booking.html";
//     window.location.href = bookLink;
//     console.log("booking hoo rhi h");
// });

document.querySelectorAll('.HomeNextBookIcon').forEach(button => {
  button.addEventListener('click', () => {
    window.location.href = 'Booking/booking.html';
  });
});




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
  

  
  
