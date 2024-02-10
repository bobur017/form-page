const form = document.querySelector('form')
const okay = document.querySelector('.okay')
const button = document.querySelector('#btn')
const password = document.querySelector('#pass')
const passwordRepeat = document.querySelector('#passRep')
const name = document.querySelector('#name')
const passes = document.querySelectorAll('.password')

passes.forEach(input => {
    const control = input.querySelector('.password-control')
    const password = input.querySelector('input')
    
    control.onclick = (event) => {
        if (password.getAttribute('type') === 'password') {
            event.target.classList.add('view')
            password.setAttribute('type', 'text');
        } else {
            event.target.classList.remove('view')
            password.setAttribute('type', 'password');
        }
    }
})

const postData =  (url, data) => {
    const response = fetch(url, {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: data
    })
    if (response.status === 404) {
        return alert('Xatolik 404')
    }
    if (response.status === 400) {
        return alert('Bunaqa foydalanuvchi avvaldan mavjud!')
    }
    form.style.display = 'none'
    okay.style.display = 'block'
    return response.json()
}

const bindPostData = (form) => {
    button.onclick = async (event) => {
        event.preventDefault()
        const obj = {
            "username":name.value,
            "password":password.value,
            "password_confirm" : passwordRepeat.value
        };
        const json = JSON.stringify(obj)
        // if (name.value === '') {
        //     return alert('Ismingizni kiriting!')
        // }
        // if (password.value === '') {
        //     return alert('Parol kiriting!')
        // }
        // if (password.value.length < 8) {
        //     return alert("Eng kamida 8 belgi bo'lishishi shart")
        // }
        // if (passwordRepeat.value === '') {
        //     return alert('Parolni qayta kiriting!')
        // }
        if (password.value === passwordRepeat.value) {
            console.log(obj);
            return postData("http://10.0.102.131:8000/api/users/", json)
        }
        else {
            return alert('Parol most emas!')
        }
    }
}

bindPostData(form)
