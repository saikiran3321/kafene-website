function gobackend() {
    let url = "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users"
    let options = {
        method: "GET"
    };
    fetch(url, options)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonData) {
        displayResults(jsonData);
    });
}

gobackend();


let search = document.querySelector(".search");
let reset = document.querySelector(".reset");
let table = document.querySelector(".contant-section");

let displayResults = function(data) {
    const card = document.querySelector(".contant-section");
    for (let i = 0; i < data.length; i++) {
        card.innerHTML +=`
        <tr class="TableRow">
            <td class="primary-text">${data[i].id}</td>
            <td class="secondary-text"><img src =${data[i].profilePic}></td>
            <td class="secondary-text">${data[i].fullName}</td>
            <td class="primary-text">${data[i].dob}</td>
            <td class="secondary-text">${data[i].gender}</td>
            <td class="secondary-text">${data[i].currentCity},${data[i].country}</td>
        </tr>
        `  
    }
}

function searchEvent(event) {
    if(event.key === "Enter") {
        event.preventDefault();
        table.textContent = " ";
        let searchInput = search.value;
        console.log(searchInput)
        let url = "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users?fullName="+searchInput;
        let options = {
            method: "GET"
        };

        fetch(url, options)  //accessing and manipulating parts of the HTTP 
            .then(function (response) {
                return response.json();
            })
            .then(function (jsonData) {
            displayResults(jsonData);
            
            });
    }
}

search.addEventListener("keydown", searchEvent);

reset.addEventListener('click',function(event){
    event.preventDefault()
    search.value=""  
    table.textContent=""
    gobackend();
})