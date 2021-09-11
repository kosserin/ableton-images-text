const scrollNav = () =>{
    document.addEventListener('scroll', ()=>{
        const nav = document.querySelector('.under-nav');
        if(pageYOffset>0){
            nav.style.top='0px';
        }else{
            nav.style.top='10vh'
        }
    })
}

const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    burger.addEventListener('click', () =>{
        burger.classList.toggle('toggle');
        nav.classList.toggle('show');
    })
}
navSlide();
scrollNav();