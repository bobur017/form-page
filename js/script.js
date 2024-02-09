let tableBody = document.getElementById('tableBody');
let tds = document.getElementsByTagName('td');


function tableAddWithUSer(data) {
    data?.forEach((element, index) => {
        let row = `<tr>
            <td>${index + 1}</td>
            <td> <img src="${element.avatar ?? "./images/account-customize-man-svgrepo-com.svg"}"/ "></td>
            <td>${element.username}</td>
            <td>${"yo'q"}</td>
        </tr>`
        tableBody.innerHTML += row
    });
}

fetch('https://ce38-93-170-220-216.ngrok-free.app/api/users/').then(res => res.json())
    .then(data => tableAddWithUSer(data))
    .catch(error => console.error('Fetch error:', error));

    