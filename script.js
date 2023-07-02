// Script for navigation bar

const ham = document.getElementById('bar');
const menu = document.getElementById('navbar');
const x = document.getElementById('close');
if(ham){
    ham.addEventListener('click', () => {
        menu.classList.add('mobile');
    })
}
 
if(x & menu){

    
    x.addEventListener('click',() => {
        menu.classList.remove('mobile');
    })
}






