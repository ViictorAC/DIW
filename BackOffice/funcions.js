const hamburguesa = document.querySelector('.hamburguesa'); 
const menu = document.querySelector('.menuMovil');
let menuObert = false;

hamburguesa.addEventListener('click', () =>{
    if (menuObert == false){
        menu.style.display = "block";
        menuObert = true;
    
    }else if(menuObert == true){
        menu.style.display = "none";
        menuObert = false;
    }
});

