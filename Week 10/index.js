var btn = document.querySelector('#click');
var signIn = document.querySelector('.card');
// var drop = document.querySelector('')

btn.addEventListener('click', display);

function display(e) {
    e.preventDefault();
    if (signIn.style.display == 'none') {
        signIn.style.display = 'flex';
    } else {
        signIn.style.display = 'none';
    }
}