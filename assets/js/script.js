let products = [
    {
        id : 1,
        image : "https://th.bing.com/th/id/OIP.AeT2XAUvPGbW1eW93_KTEQHaJ6?w=150&h=201&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
        name: "Sweater",
        category: "clothes",
        price: 35 ,
    } ,
    {
        id : 2,
        image : "https://th.bing.com/th/id/OIP.t1PbvHnGQoEp4KjYiT6hzwHaL5?w=115&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
        name: "Mobile",
        category: "Electrical",
        price: 1000 ,
    } ,
    {
        id : 3,
        image : "https://th.bing.com/th/id/OIP.koqxa86nXWb-FOFNjuKdfAHaHa?w=214&h=215&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
        name: "Sweater",
        category: "clothes",
        price: 80 ,
    } ,
    {
        id : 4,
        image : "https://th.bing.com/th/id/OIP.jqmqn1TqKyTTyH9sq8TSOAHaHa?w=199&h=200&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
        name: "Sweater",
        category: "clothes",
        price: 20 ,
    } ,
    {
        id : 5,
        image : "https://th.bing.com/th/id/OIP.L_IBmQ5JmWqU-k1Ezm9DjgHaFj?w=231&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
        name: "Mobile",
        category: "Electrical",
        price: 300 ,
    } ,
    {
        id : 6,
        image : "https://th.bing.com/th/id/OIP.t_ep7oDd1kjh86ACpfEIewAAAA?w=170&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
        name: "PlayStation",
        category: "Electrical",
        price: 500 ,
    } ,
    {
        id : 7,
        image : "https://th.bing.com/th/id/OIP.okPHK-lOk_E5nzOZsGx2dwHaFI?w=236&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
        name: "laptop",
        category: "Electrical",
        price: 400 ,
    } ,
    {
        id : 8,
        image : "https://th.bing.com/th/id/OIP._4B7gdC4F997ocyj38622gHaHa?w=203&h=174&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
        name: "Sweater",
        category: "clothes",
        price: 75 ,
    } ,
    {
        id : 9,
        image : "data:image/webp;base64,UklGRnYFAABXRUJQVlA4IGoFAABQLQCdASrdAOoAPp1MokylpCcrI1MZqWATiWlu4W5w/kGk0z4RaSyec76L60aBSobKoY+i+CK2T/7TAeNtcWSvL1U0XwXUqaizLmsV5d2sUTDBu1Nqs3meoEqHUyHCNj3WBlW1JFCM0sNmcTzwh5xLtcVnl5bPT/7nFOdA5ibAfW5LfafZ936INtEtGQk3f7EpLoiqXm/KyTlQx9aFeNPLgEQCKBi3RrmreyeXfDGxgViVDZROGb7+c0rRqkj0y23TL1hdFfdNP66GXONNEZsU9gGfvcDvf+ONRRek0NU3D9YLzebNxXBA79F5bPTf1lBUlhOdWysgDf8jY5NyMrVbrQ4a4J1ANy8m3C1TdpRehLOil6Wz1YClvXl0TNCcfF4P+SbQrM30UkNf50IxUdlaMFO5l++qIy5XHc7PTb9voGF0UV3ccrjjOMzs7vznV/VK4EvpBxpw6f+zxnq5cdlpJ9RThWxdKiZmrNbOZFJHamv5AAD+/imPCZOT9x7SyFj3e5xpJob9f3K6L56NRPfNAgJuwoo7N8Y9JUsbMU+51Bqq8q5CwJOLA8//eqzmiHsv/TjSUSX0F11UBoKDgYJ511bLIPifBnjQIbnrPGi2/6STrlmHUGrwaAGTln3CGpPQQLI3DFrLpfO99yJdXuTngfoFn6m3FDYYisq1pPDriLeqoTTFNZHrrd/3b2ts3s9NE1mCV3YzEpu1SwGnd8CM1CqP9eAmJZ7scpTOkdPrYZymGm1/BEfmxsqdwXIWPt8OGx5ZDKN6asRTfwi79HgwDM01CPuSMKMN3hFiPlRPKkBGYWaCsMlM7I5ckpDCLU3rP/b9ccj/XZgMTvzwibS2EPnHfLm1UDZn6RFu1kHB2EyrlX+8DuB8QAtGbpCTmt/M2B68l9PVClUSF0hF8LoCQhFOmPd9hWv7NLhsWdaMg1attZOSeSz8k8zgSfDOv81FcZ+5VGCRUY69D4D3AxENQWwlteVEBsu5xx0fd16reeRge4cqKpppX1GJs0b7kdqIrWztIRYmTQ6NWXFvz/gkuusCJKrTbxj5KQwK00oPzZcruaIxVSBQAp8c73/Fv0+zrfYnjtP0+kT9Xqk18fKM3x87ekyM3pikPcGi/ArKYTNfewMO19cpkzAPU2QdJuJiuHReh6hl+n2Lg+P3fhI6Kjt2cMPePjR2ndP3tjyTm3i4BCDEN7O+sDpjV7l7BKMZ6SNjtpHK1sDHHwo7gtGLv96AnrOSWA8wJvFAYwnzVo7mtJ7qn03frSIW4lawTjURaRmTCzN0HPh4RlTNSW0JrbHaMbL46IBvmRIIJmIBVDfAnmwJX0IDftF+f7gty4djOpZ7BfewuL7muomsDweq0t+OewhMKtAn0k6LXG5ENO80qvR+luu6bVNfeq77MGYHhnXDavx4dtXy02yP1e5oC6rbyta12QYjbsaJ9SB+VQCT89qcq0FDWkN0kEEPs7iLas+nbZf2Hg3uxVdnWzmX9HiUDhdHZGse3yoIjeiGae3Bq85wJ515GWZZNFQ6bmJhV2YQ6KuNrGAJwANfLInNpzZw3Drzky7dczUMM0IWSXXKanb3z4yjcA+GM+sbYBK5Q/lxGdvvOi9I4qPGnD+j5TsCRxnYxnj76SwnJ50tVwWqcxsXPioNAsFKcsZxIDOktVE1wVDyNK7vZoiMAuffCsYFURExs2vC612HG5oLZFPFaNEkldHxlc9yFsPzexYK+Al99wXMk6bgR/2JxW6/lwvbm1V5yj34rZJ544dZ/Imwj2xE5CX33dtzrpHLADFHKNB6AZOxfVMTOkvCrMyiCcnzFEu7YEJ4AeVlkzF9jHAy6miyIwAAAAA=",
        name: "Air pod",
        category: "Electrical",
        price: 100  ,
    } ,
]


const DashboardLink = document.getElementById('Dashboard_link');
const MarketLink = document.getElementById('Market_link');
const DashboardSection = document.getElementById('Dashboard');
const MarketSection = document.getElementById('Market');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const searchbtn = document.getElementById('searchbtn');
const searchInput = document.getElementById('search_input');
const filterBtns = document.querySelectorAll('.filter-btn');
const price = document.getElementById('price');
const container = document.getElementById('contener_product');
const cards = document.querySelector('.contener_products');
const productsTableBody = document.getElementById('products-table-body');


const addForm = document.getElementById('Add_pro');

let nextProductId = products.length + 1;

let currentCategoryFilter = 'All';
let currentSearchTerm = '';
let currentSortOption = 'default';

let currentSlide = 0;
let filteredItems = [];

document.addEventListener('DOMContentLoaded' , function(){
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
        products = JSON.parse(storedProducts);
        nextProductId = products.length + 1;
    }
    loudapp();
})

function loudapp(){
    if(MarketSection){
        readproducts ()
        setUpEvent()
    }else{
    readproductstabel()
    }
}

function setUpEvent(){

    searchbtn.addEventListener('click' , search);
    searchInput.addEventListener('keyup', (event) =>{
        if(event.key == 'Enter') search();
    })

    filterBtns.forEach(btn =>{
        btn.addEventListener('click' , () =>{
            filterBtns.forEach(b => {
                b.className = 'filter-btn';  
            });
            btn.className = 'filter-btn active';
            currentCategoryFilter = btn.dataset.category;
            readproducts();
        });
    })

    price.addEventListener('change' , () =>{
        currentSortOption = price.value
        readproducts();
    })

    prevBtn.addEventListener('click', slideLeft);
    nextBtn.addEventListener('click', slideRight);
}
function search(){
    currentSearchTerm = searchInput.value.trim()
    readproducts() ;
}

function filteredProducts(){
    return products.filter(product =>{
            const categoryMatch = currentCategoryFilter == 'All' || product.category == currentCategoryFilter;
            const searchMatch = currentSearchTerm =='' ||
                product.name.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
                product.category.toLowerCase().includes(currentSearchTerm.toLowerCase());
                
                return categoryMatch && searchMatch;
    })
}
function sortproducts(products){
    const sortedProducts = [...products];
            
            if (currentSortOption === 'from the cheap') {
                sortedProducts.sort((a, b) => a.price - b.price);
            } else if (currentSortOption === 'from the expensive') {
                sortedProducts.sort((a, b) => b.price - a.price);
            }
            return sortedProducts;
}
function  readproducts () {
    container.innerHTML = '' ;
    filteredItems = filteredProducts()
    filteredItems = sortproducts(filteredItems)

    const slider = document.getElementById('slider');
    const noProductsMsg = document.getElementById('no_products_msg');

    if(filteredItems.length == 0){
        noProductsMsg.style.display = 'block';
        if(slider)slider.style.display = 'none';
        return;
    } else {
        noProductsMsg.style.display = 'none';
        if(slider) slider.style.display = 'flex';
    }
    filteredItems.forEach(product => {
        container.innerHTML += `
        <div class="card-wrapper">
            <div class="card">
                <img src="${product .image}" alt="">
                <h3>${product .name}</h3>
                <p>${product .category}</p>
                <p>${product .price} $</p>
            </div>
        </div>
        `
    })
}
function readproductstabel(){
    productsTableBody.innerHTML = "";

    products.forEach(product => {
        productsTableBody.innerHTML += `
            <tr>
                <td>${product.name}</td>
                <td>${product.price} $</td>
                <td>${product.category}</td>
                <td>
                    <div class="table-actions">
                        <button class="btn edit_btn" name="edit" data-id="${product.id}">Edit</button>
                        <button class="btn delete_btn" name="delete" data-id="${product.id}">Delete</button>
                    </div>
                </td>
            </tr>
        `;
    });
}

let offset = 0;

function slideRight() {
    if(offset==0){
    offset = (filteredItems.length -3)
    }else{
    offset--;
    }
    moveCards();
}

function slideLeft() {
    if(offset==filteredItems.length-3){
    offset = 0
    }else{
    offset++;
    }
    moveCards();
}

function moveCards() {
    const cardWidth = document.querySelector('.card-wrapper').offsetWidth;
    const gap = 34; 
    const step = (cardWidth + gap) * offset;

        document.querySelectorAll('.card').forEach(card => {
            card.style.transform = `translateX(-${step}px)`
    });
}

let productImageInput,
    productNameInput,
    productCategoryInput,
    productPriceInput;

    if (addForm) {
    productImageInput = addForm.querySelector('input[type="url"]');
    productNameInput = addForm.querySelector('input[type="text"]');
    productCategoryInput = addForm.querySelector('select');
    productPriceInput = addForm.querySelector('input[type="number"]');

    addForm.addEventListener('submit', add_edite_Product);
}

function add_edite_Product(e) {
    e.preventDefault();

    if (editProductId !== null) {
        const index = products.findIndex(p => p.id === editProductId);
        products[index] = {
            id: editProductId,
            image: productImageInput.value.trim(),
            name: productNameInput.value.trim(),
            category: productCategoryInput.value,
            price: parseFloat(productPriceInput.value)
        };
        editProductId = null;
        document.getElementById('form_title').textContent = "Add New product:";
        } else{
            const newProduct = {
                id: nextProductId++,
                image: productImageInput.value.trim(),
                name: productNameInput.value.trim(),
                category: productCategoryInput.value,
                price: parseFloat(productPriceInput.value)
            };

    products.push(newProduct);
    }
    localStorage.setItem('products', JSON.stringify(products));

    offset = 0;

    if (addForm) {
        readproductstabel();
    } else {
        readproducts();
    }

    addForm.reset();
}


let editProductId = null;
let deleteProductId = null;


productsTableBody.addEventListener('click' , (event) =>{
    if(event.target.name === 'delete'){
        deleteProductId = Number(event.target.dataset.id) ;
        products = products.filter(p => p.id !== deleteProductId);
        localStorage.setItem('products',JSON.stringify(products));
    }

    if(event.target.name === 'edit'){
        editProductId = Number(event.target.dataset.id) ;
        const  product = products.find(p => p.id === editProductId);

        productImageInput.value = product.image;
        productNameInput.value = product.name;
        productCategoryInput.value = product.category;
        productPriceInput.value = product.price;

        document.getElementById('form_title').textContent = "Edit Product:";

    }
    if(MarketSection){
            readproducts();
        }else{
            readproductstabel();
        }
})