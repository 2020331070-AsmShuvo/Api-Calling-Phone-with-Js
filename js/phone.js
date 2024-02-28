const loadPhone = async (searchText)=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones);
}

const displayPhones = (phones) =>{

    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent=``;

    // display only first <=9 phones initially:
    
    const showAllbtn = document.getElementById('show-all-container'); 
    console.log(phones.length);
    if(phones.length>9){
        showAllbtn.classList.remove('hidden');
    }
    else{
        showAllbtn.classList.add('hidden');
    }
    phones = phones.slice(0,6);
    
    phones.forEach(phone => {
        const phoneCard = document.createElement('div');
        phoneCard.classList = 'card card-compact p-4 mx-auto m-4 bg-gray-100 shadow-xl';
        phoneCard.innerHTML = `
            <figure><img src="${phone.image}" alt="Shoes" /></figure>
            <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
            </div>
            </div>
        `;
        phoneContainer.appendChild(phoneCard);        
    });
    // hide spinner
    startToggleSpinner(false);
}

const searchHandler = ()=>{
    startToggleSpinner(true);
    const inputField = document.getElementById('search-field');
    const searchText = inputField.value;
    loadPhone(searchText);

}

const startToggleSpinner = (isLoading)=>{
    const loadingSpinner = document.getElementById('loading-spinner');
    if(isLoading){
        loadingSpinner.classList.remove('hidden');
    }
    else{
        loadingSpinner.classList.add('hidden');
    }
}

loadPhone("iphone");




