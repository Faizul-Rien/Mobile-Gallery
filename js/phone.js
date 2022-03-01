const searchMobile = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    searchField.value = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.data.slice(0,20)))
}

const displaySearchResult = mobiles =>{
    const searchResultDisplay = document.getElementById('search-display');
    // console.log(mobiles);

    searchResultDisplay.innerHTML ='';

    mobiles.forEach(mobile =>{
        
    
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML =`
    <div class="card px-2">
        <img src="${mobile.image}" class="card-img-top" height="400px" alt="...">
            <div class="card-body">
            <h5 class="card-title">${mobile.phone_name}</h5>
            <p class="card-text">${mobile.brand}</p>
            </div>
        <button onclick="loadMobileDetails('${mobile.slug}')" class="w-25 ms-2 mb-2 text-white rounded  bg-primary border-0">Details</button>
    </div>
    `;
    searchResultDisplay.appendChild(div)
        // console.log(mobile)
    })
}

const loadMobileDetails = mobileId =>{
    const url =`https://openapi.programming-hero.com/api/phone/${mobileId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMobileDetails(data.data))
}

const displayMobileDetails = mobile =>{
    console.log(mobile)
    const displayDetails = document.getElementById('display-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    
    `;
}