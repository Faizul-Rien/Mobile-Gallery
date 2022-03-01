const searchMobile = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    searchField.value = '';

    if( searchText === ''){
    const searchResultDisplay = document.getElementById('search-display');
    const displayDetails = document.getElementById('display-details');
    displayDetails.innerHTML = '';
    searchResultDisplay.innerHTML ='';

    alert("Please enter a valid mobile name!!!");
    return false;
    } 

    else{
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

        fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data.slice(0,20)))
    }

    
}

const displaySearchResult = mobiles =>{
    const searchResultDisplay = document.getElementById('search-display');
    const displayDetails = document.getElementById('display-details');
    displayDetails.innerHTML = '';
    searchResultDisplay.innerHTML ='';

    mobiles.forEach(mobile =>{
        
    
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML =`
    <div class="card px-2 border border-info pt-2">
        <img src="${mobile.image}" class="card-img-top" height="400px" alt="...">
            <div class="card-body">
            <h5 class="card-title">Name : ${mobile.phone_name}</h5>
            <p class="card-text">Brand : ${mobile.brand}</p>
            </div>
        <button onclick="loadMobileDetails('${mobile.slug}')" class="w-25 ms-3 mb-2 text-white rounded  bg-primary border-0">Details</button>
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
    displayDetails.innerHTML = '';
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        <img height="400px" src="${mobile.image}" class="card-img-top p-3" alt="...">
                <div class="card-body ">
                  <h5 class="name">Name : ${mobile.name}</h5>
                  <h6 class="text"> Main Features </h6>
                  <p>Storage : ${mobile.mainFeatures.storage}</p>
                  <p>Release Date : ${mobile.releaseDate}</p>
                  <p>Sensors : ${mobile.mainFeatures.sensors} </p>
                <h6 class="text"> Other Features </h6>
                  <p>Bluetooth : ${mobile.others.Bluetooth}</p>
                  <p>Radio : ${mobile.others.Radio}</p>
                  
                </div>
        `;
        mobile.mainFeatures.sensors.forEach(sensor => {
            const sensors = sensor;
            })
    
        displayDetails.appendChild(div)
        
  
}

