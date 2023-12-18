

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
    if(getValue('pass') !== getValue('confpass')){
        alert("Passwords are not matching..");
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