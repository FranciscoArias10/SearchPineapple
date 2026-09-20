window.onscroll = function(){

    scroll = document.documentElement.scrollTop;

    header = document.getElementById("header");

    if (scroll > 20){
        header.classList.add('nav_mod');
    }else if(scroll < 20){
        header.classList.remove('nav_mod');
    }

}

document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

menu = document.getElementById("header");
body = document.getElementById("container_all");
nav = document.getElementById("nav");

function mostrar_menu(){
    
    menu.classList.toggle('move_content');
    body.classList.toggle('move_content');
    nav.classList.toggle('move_nav');
}


window.addEventListener("resize", function(){

    if(window.innerWidth > 760){
        menu.classList.remove('move_content');
    body.classList.remove('move_content');
    nav.classList.remove('move_nav');
    }

})

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry =>{
    entry.target.getAttribute("id");
    const menulink = document.querySelector(`.container__header a[href="#${id}"]`)
    if (entry.isIntersecting) {
        menulink.classList.remove("select");
    }else{
        menulink.classList.remove("select");
    }
})
})

const hash = menulink.getAttribute("href");
  const target = document.querySelector(hash);
  if(target){
      observer.observe(target);
  }


  menulink.forEach(menulink =>{
      menulink.addEventListener("click",function(){
          menu.classList.remove("menu_opened")
      })
     const hash = menulink.getAttribute("href");
     const target = document.querySelector(hash);
     if(target){
         observer.observe(target)
     }
  })