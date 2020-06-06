const URL = 'http://localhost:3036';
const toggleMenu=()=>{
    let langMenu =  document.querySelector('.lang-menu-wrapper');
    let mobileMenu = document.querySelector('.menu-mobile');
    let miscMenu = document.querySelector('.misc-container');
    let bool = langMenu.style.display === 'flex'?'none':'flex'
    if(window.innerWidth < 1025){

        langMenu.style.display=bool
        mobileMenu.style.display=bool
        miscMenu.style.display=bool
    }
}

const elementPositionHandler=(event)=>{
    const item = document.querySelector('.ham-menu');
    while(item == null){
        return 1;
    }
    if (window.pageYOffset >= item.offsetTop) {
        item.classList.add('ham-menu-stickey')
        } else {
        item.classList.remove('ham-menu-stickey')
        }
}



export {
    URL,
    toggleMenu,
    elementPositionHandler
}