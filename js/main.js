let btnSubmit = document.querySelector('#btn-submit');
let form = document.querySelector('form');
let repaetPassword = document.querySelector('.repaet-password');
let successful = document.querySelector('.successful');
let eyes = document.querySelectorAll('.eye');
let input = document.querySelectorAll('input');

const resultData = (response) => {
    console.log(response)
    if (response.status === 200 || response.status === 201) {
        form.style.display = 'none';
        successful.style.display = 'block';
    } else if (response.status === 400) {
        alert("Xatolik");
    }
}

const postData = async (url, formdata) => {
    var requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formdata,
    };

    fetch(url, requestOptions)
        .then(response => response)
        .then(result => resultData(result))
        .catch(error => console.log('error', error));
}

eyes.forEach((eye, index) => {
    let password = document.querySelectorAll('.password');
    
    eye.addEventListener("click", (e) => {
        if (index ===1) {
            if (password[index].getAttribute('type') !== "password") {
                e.target.classList.remove("view-off")
                password[index].setAttribute('type', 'password');
            } else {
                e.target.classList.add("view-off")
                password[index].setAttribute('type', 'text');
            }
        }
    });
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let data = {
        "username": form.username.value,
        "password": form.password.value,
        "password_confirm": form.password_confirm.value,
    };

    postData("https://ce38-93-170-220-216.ngrok-free.app/api/users/", JSON.stringify(data));

    validate();
})
function validate() {
    // if (form.password.value !== form.password_confirm.value) {
        // alert("Parollar mos emas!")
    // }
}
