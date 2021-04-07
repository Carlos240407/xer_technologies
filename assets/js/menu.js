const menu = ()=>{
    const menuHamburger = document.querySelector('.menu');
    const btn = document.querySelector('.container .header .btn');
    const navbar = document.querySelector('.navegacion');
    menuHamburger.addEventListener('click', navegacion);

    // muestra el menu de navegacion
    function navegacion(){
        if(navbar.classList.toggle('show-menu'));
    }
}

menu()