const destinationsURL = "https://mock-api-template-cw-4.onrender.com/destination_packages";

async function fetchData(url, condition, page) {
  try {
    let response = await fetch(
      `${url}?${condition || ""}_page=${page || 1}&_limit=10`
    );
    let totalData = response.headers.get("X-Total-Count");
    let noOfButtons = Math.ceil(totalData / 10);
    renderPagination(noOfButtons, condition);
    let data = await response.json();

    renderData(data);
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

fetchData(destinationsURL);

const mainSection = document.getElementsByClassName('destinationsHolder')[0];
const paginationContainer = document.getElementById('pagination');

function renderData(data) {
  mainSection.innerHTML = "";
  data.forEach(destCardData => {
    const destCard = createHomeCard(destCardData);
    mainSection.appendChild(destCard);
  });
}

function createHomeCard(pack) {
  const destCard = document.createElement('div');
  destCard.classList.add('destCard');

  const title = document.createElement('h4');
  title.textContent = pack.name;
  destCard.appendChild(title);

  const location = document.createElement('h5');
  location.textContent = `Location : ${pack.location}`;
  destCard.appendChild(location);

  const duration = document.createElement('span');
  duration.textContent = `Duration : ${pack.duration}`;
  destCard.appendChild(duration);

  const price = document.createElement('h6');
  price.textContent = `Package Price : $${pack.price}`;
  destCard.appendChild(price);
  const heading=document.createElement('span');
  heading.className='heading';
  heading.textContent="JOIN US FOR...";

  destCard.appendChild(heading);

  const det = document.createElement('p');
  det.textContent = pack.details;
  destCard.appendChild(det);

  destCard.addEventListener('click', () => {
    window.location.href = "../Booking/booking.html";
  });

  return destCard;
}

function renderPagination(num, query) {
  paginationContainer.innerHTML = "";

  for (let i = 1; i <= num; i++) {
    const pageButton = document.createElement('button');
    pageButton.textContent = i;

    // Use a closure to capture the correct value of i
    pageButton.addEventListener('click', () => {
      fetchData(destinationsURL, query, i);
    });

    paginationContainer.appendChild(pageButton);
  }
}
