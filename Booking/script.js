const baseurl = "https://mock-api-template-cw-4.onrender.com";
/// confirm destination
let destinationconfirmbtn = document.getElementById("Confirm-destination") ;
let cardCountry = document.getElementById("card-country") ;
let cardplaces = document.getElementById("card-place") ;
let cardprice = document.getElementById("card-price") ;
let destimage = document.getElementById("destination-image") ;
let cardid = document.getElementById("card-id") ;

fetchcarddata() ;
async function fetchcarddata(id=1){
  let url = `${baseurl}/booking_images/${id}` ;
  let res = await fetch(url) ;
  let data = await res.json() ;
  appendData(data) ;
}
function appendData(data){
  let {id ,countryImg , countryName,TouristPlace,price} = data;
  destimage.src = countryImg;
  destimage.alt = countryName ;

  cardid.innerHTML = id ;
  cardCountry.innerHTML = countryName ;
  cardplaces.innerHTML = TouristPlace ;
  cardprice.innerHTML = price ;
}
destinationconfirmbtn.addEventListener('click' , (e) =>{
  destinationconfirmbtn.style.opacity = 0.5 ;
  document.getElementById("tour-progress-num").classList.add('invisible');
  document.getElementById("tour-progress-comp").classList.remove('invisible');
})

///right arrow and left arrow
document.getElementById("dest-rightarrow").addEventListener('click' , ()=>{
  let n = Number(cardid.innerHTML) ;
  if(n === 18){
fetchcarddata() ;
  }
  else{
    n++ ;
    fetchcarddata(n) ;
  }
} )
document.getElementById("dest-leftarrow").addEventListener('click' , ()=>{
  let n = Number(cardid.innerHTML) ;
  if(n === 1){
fetchcarddata(18) ;
  }
  else{
    n-- ;
    fetchcarddata(n) ;
  }
} )


//Contact Details
let Firstname = document.getElementById("Firstname");
let Lastname = document.getElementById("Lastname");
let Phone = document.getElementById("Phone");
let Email = document.getElementById("Email");
let Country = document.getElementById("Country");
let Address = document.getElementById("Address");

// Billing details
let Firstname1 = document.getElementById("Firstname1");
let Lastname1 = document.getElementById("Lastname1");
let Phone1 = document.getElementById("Phone1");
let Email1 = document.getElementById("Email1");
let Country1 = document.getElementById("Country1");
let Address1 = document.getElementById("Address1");

let formcheckinput = document.getElementById("formcheckinput");
formcheckinput.addEventListener("click", (e) => {
  // e.preventDefault() ;
  Firstname1.value = Firstname.value;
  Lastname1.value = Lastname.value;
  Phone1.value = Phone.value;
  Email1.value = Email.value;
  Country1.value = Country.value;
  Address1.value = Address.value;
});

let submitbtn = document.getElementById("submitdata");
submitbtn.addEventListener("click", (e) => {
  e.preventDefault();
  let fname = Firstname.value;
  let lname = Lastname.value;
  let ph = Phone.value;
  let em = Email.value;
  let cot = Country.value;
  let add = Address.value;
  if (fname && lname && ph && em && cot && add) {
    // submitbtn.style.opacity = 0.3;
    document.getElementById("payment-name").innerHTML =  `${fname} ${lname}` ;
    document.getElementById("payments").classList.remove("invisible") ;

    document.getElementById("contact-progress-num").classList.add("invisible");
    document
      .getElementById("contact-progress-comp")
      .classList.remove("invisible");
      document.getElementById("pay-image").src = destimage.src ;
      document.getElementById("payment-dest").innerHTML = cardplaces.innerHTML ;
      document.getElementById("payment-price").innerHTML = cardprice.innerHTML ;
    // Firstname1.value = "";
    // Lastname1.value = "";
    // Phone1.value = "";
    // Email1.value = "";
    // Country1.value = "";
    // Address1.value = "";
    // Firstname.value = "";
    // Lastname.value = "";
    // Phone.value = "";
    // Email.value = "";
    // Country.value = "";
    // Address.value = "";
  } else {
    alert("Fields Are Empty!!!");
  }
});

//Payment Confirmation
let payButton = document.getElementById("pay");
let paymentcarddetails = document.getElementById("payment-card-details ");
payButton.addEventListener("click", (e) => {
  payButton.style.opacity = 0.3;
  paymentcarddetails.classList.remove("invisible");
});

let payconfirm = document.getElementById("pay-confirm");
payconfirm.addEventListener("click", (e) => {
  let name = document.getElementById("paymentcardname").value;
  let number = document.getElementById("paymentcardnumber").value;
  let cvv = document.getElementById("paymentcvv").value;
  if (name && cvv && number) {
    payconfirm.style.opacity = 0.3;
    document.getElementById("paymentcardname").value = "";
    document.getElementById("paymentcardnumber").value = "";
    document.getElementById("paymentcvv").value = "";
    setTimeout(() => {
      document
        .getElementById("payment-progress-num")
        .classList.add("invisible");
      document
        .getElementById("payment-progress-comp")
        .classList.remove("invisible");
      setTimeout(() => {
        alert("Payment Successfull!");
        setTimeout(() => {
          document
            .getElementById("complete-progress-num")
            .classList.add("invisible");
          document
            .getElementById("complete-progress-comp")
            .classList.remove("invisible");
          setTimeout(() => {
            alert("Your Booking is Completed!");
          }, 500);
        }, 1000);
      }, 500);
    }, 1000);
  } else {
    alert("Fields Are Empty!!!");
  }
});

