// let username = document.getElementById('uname');
// let pass = document.getElementById('pass');
// let conf_pass = document.getElementById('confpass');
// let firstName = document.getElementById('fname');
// let lastName = document.getElementById('lname');
// let Birthdate = document.getElementById('bdate');
// let email = document.getElementById('email');
// let phoneNumber = document.getElementById('phone');
// let countryName = document.getElementById('countries');


// function signup() {
//     let temp = {
//         id: username.value,
//         password: pass.value,
//         fname: firstName.value,
//         lname: lastName.value,
//         DOB: Birthdate.value,
//         Phone: phoneNumber.value,
//         Country: countryName.value,
//         Email: email.value,
//     };

//     fetch('https://mock-api-template-cw-4.onrender.com/users', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(temp),
//     })
//     .then(response => response.json())
//     .then(data => {
//         alert("Registered Successfully...");
//     })
//     .catch(error => {
//         console.error(error);
//     });
// }







function signup() {
    var formData = {
        id: getValue('uname'),
        password: getValue('pass'),
        firstName: getValue('fname'),
        lastName: getValue('lname'),
        birthDate: getValue('bdate'),
        email: getValue('email'),
        phone: getValue('phone'),
        country: getValue('countries'),
    };

    if (!validateFormData(formData)) {
        alert("Please Fill the input Fields.");
        return;
    }

    fetch('https://mock-api-template-cw-4.onrender.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
        .then(response => response.json())
        .then(data => {
            
            console.log('Success:', data);
            alert("Welcome to Banjara Family....")
            window.location.href = '../index.html';
        })
        .catch(error => {
            // console.error('Error:', error);
            throw new Error("error");
        });
}

function getValue(id) {
    return document.getElementById(id).value;
}

function validateFormData(formData) {
    for (var key in formData) {
        if (formData.hasOwnProperty(key) && (formData[key] === "" || formData[key] === null || formData[key] === undefined)) {
            return false;
        }
    }
    return true;
}
