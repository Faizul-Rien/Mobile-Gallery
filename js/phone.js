// search field function 
const searchMobile = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    // clean search field 
    searchField.value = '';

    // error message for empty string search 
    const error = document.getElementById('error');
    if( searchText === '' ){
        error.style.display ='block';
    const searchResultDisplay = document.getElementById('search-display');
    const displayDetails = document.getElementById('display-details');
    displayDetails.innerHTML = '';
    searchResultDisplay.innerHTML ='';
    } 

    else{
        error.style.display ='none';
    }

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.data.slice(0,20)))  

}

// display search result 
const displaySearchResult = mobiles =>{
    const searchResultDisplay = document.getElementById('search-display');
    const displayDetails = document.getElementById('display-details');
    displayDetails.innerHTML = '';
    searchResultDisplay.innerHTML ='';

    // wrong mobile search error message 
    if(mobiles?.length == 0 ){
        document.getElementById('error').style.display ='block';
    }

    else{
        document.getElementById('error').style.display ='none';
    }

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
        
        })
             
}
// mobile details function 
const loadMobileDetails = mobileId =>{
    const url =`https://openapi.programming-hero.com/api/phone/${mobileId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMobileDetails(data.data))
}

// display mobile details data 
const displayMobileDetails = mobile =>{
    const displayDetails = document.getElementById('display-details');
    displayDetails.innerHTML = '';
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        <img height="400px" src="${mobile.image}" class="card-img-top p-3" alt="...">
            <div class="card-body ">
                <h5 class="name">Name : ${mobile.name}</h5>
                <h6 class="text"> Main Features </h6>
                  <p><span class="dark">Storage</span> : ${mobile.mainFeatures.storage}</p>
                  <p><span class="dark">Sensors</span> : ${mobile.mainFeatures.sensors} </p>
                  <p><span class="dark">ChipSet</span> : ${mobile.mainFeatures.chipSet ? mobile.mainFeatures.chipSet : "No data Found!!!" } </p>
                  <p><span class="dark">Display Size</span> : ${mobile.mainFeatures.displaySize} </p>
                  <p><span class="dark">Release Date</span> : ${mobile.releaseDate ? mobile.releaseDate : "No release-date found!!"}</p>
                <h6 class="text"> Other Features </h6>
                <p><span class="dark">Bluetooth</span> : ${mobile.others ? mobile.others.Bluetooth : "No data Found!!!"}</p>
                  <p><span class="dark">Radio</span> : ${mobile.others ?  mobile.others.Radio : "No data Found!!!"}</p>
                  <p><span class="dark">GPS</span> : ${mobile.others  ? mobile.others.GPS : "No data Found!!!"}</p>
                  <p><span class="dark">NFC</span> : ${mobile.others  ? mobile.others.NFC : "No data Found!!!"}</p>
                  <p><span class="dark">USB</span> : ${mobile.others  ? mobile.others.USB : "No data Found!!!"}</p>
                  <p><span class="dark">WLAN</span> : ${mobile.others  ? mobile.others.WLAN : "No data Found!!!"}</p>
                  
            </div>
        `;
        // loop for sensors 
        mobile.mainFeatures.sensors.forEach(sensor => {
            const sensors = sensor;
            })
    
        displayDetails.appendChild(div)
}

