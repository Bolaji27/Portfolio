const menus = document.querySelectorAll('nav ul li');
const sections = document.querySelectorAll('.page');


window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            menus.forEach(menu => {
                menu.classList.remove('active');
                document.querySelector('nav ul li[href*=' + id+']').classList.add('active');
            })
        }
    })
}