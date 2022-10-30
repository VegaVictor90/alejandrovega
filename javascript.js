addEventListener("DOMContentLoaded", () => {
    const menu_oculto = document.querySelector(".menu_oculto")
    if(menu_oculto) {
        menu_oculto.addEventListener("click", () => {
            const menu_items = document.querySelector(".menu_items")
            menu_items.classList.toggle("action")
        })
    }
})

addEventListener("DOMContentLoaded", () => {
    const inicio = document.querySelector(".inicio")
    const libros = document.querySelector(".libros")
    const ebooks = document.querySelector(".ebooks")
    const contacto = document.querySelector(".contacto")
    const facebook = document.querySelector(".facebook")
    const instagram = document.querySelector(".instagram")
    const youtube = document.querySelector(".youtube")
    const linkedin = document.querySelector(".linkeding")
    
    if(inicio) {
        inicio.addEventListener("click", () => {
            const menu_items = document.querySelector(".menu_items")
            menu_items.classList.toggle("action")
        })
    }    
    if(libros) {
        libros.addEventListener("click", () => {
            const menu_items = document.querySelector(".menu_items")
            menu_items.classList.toggle("action")
        })
    }    
    if(ebooks) {
        ebooks.addEventListener("click", () => {
            const menu_items = document.querySelector(".menu_items")
            menu_items.classList.toggle("action")
        })
    }    
    if(contacto) {
        contacto.addEventListener("click", () => {
            const menu_items = document.querySelector(".menu_items")
            menu_items.classList.toggle("action")
        })
    }    
    if(facebook) {
        facebook.addEventListener("click", () => {
            const menu_items = document.querySelector(".menu_items")
            menu_items.classList.toggle("action")
        })
    }    
    if(instagram) {
        instagram.addEventListener("click", () => {
            const menu_items = document.querySelector(".menu_items")
            menu_items.classList.toggle("action")
        })
    }    
    if(youtube) {
        youtube.addEventListener("click", () => {
            const menu_items = document.querySelector(".menu_items")
            menu_items.classList.toggle("action")
        })
    }    
    if(linkedin) {
        linkedin.addEventListener("click", () => {
            const menu_items = document.querySelector(".menu_items")
            menu_items.classList.toggle("action")
        })
    }    
})

// volver //

window.onscroll=function(){
    if(document.documentElement.scrollTop > 100){
        document.querySelector(".volver_container")
        .classList.add("show");

    }
    else{
        document.querySelector(".volver_container")
        .classList.remove("show");

    }
}
