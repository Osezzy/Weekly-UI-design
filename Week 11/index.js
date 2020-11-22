let productDropdown = document.querySelector('.pro-drop');
let product = document.querySelector('#produce');
let companyDropdown = document.querySelector('.comp-drop');
let company = document.querySelector('#kompany');
let body = document.querySelector('body');
let lis = document.getElementsByTagName('li');

product.addEventListener('mouseover', productDisplay);

Array.from(lis).forEach(item => item.addEventListener('mouseover', hide))

function hide(e) {
    productDropdown.style.display = 'none';
    companyDropdown.style.display = 'none';
}

product.addEventListener('mouseover', productDisplay);

function productDisplay(e) {
    companyDropdown.style.display = 'none';
    productDropdown.style.display = 'block';
}

company.addEventListener('mouseover', companyDisplay);

function companyDisplay(e) {
    productDropdown.style.display = 'none';
    companyDropdown.style.display = 'block';
}

Array.from(lis).forEach(li => li.addEventListener('mouseover', hide))

function hide(e) {
    productDropdown.style.display = 'none';
    companyDropdown.style.display = 'none';
}