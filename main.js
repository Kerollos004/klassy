//change active class
let links = document.querySelectorAll(".link")
links.forEach(link => {
    link.addEventListener("click", changeClass)
    link.addEventListener("click", removeActives)
})

function changeClass() {
    links.forEach(link => {
        link.classList.remove("active")
        this.classList.add("active")
    })
}
function removeActives() {
    menuBtn.classList.remove("active")
    menu.classList.remove("active")
}
//toggle menu btn
let menuBtn = document.querySelector(".menu-btn")
let menu = document.querySelector(".menu")
menuBtn.onclick = () => {
    menuBtn.classList.toggle("active")
    menu.classList.toggle("active")
}
//change class by scroll
let sections = document.querySelectorAll("section")
window.onscroll = ()=>{
    sections.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop
        let height = sec.offsetHeight

        if (top > offset-250  && top < offset + height) {
            links.forEach(link => {
                let secAtt = sec.getAttribute("data-top")
                let linkAtt = link.getAttribute("data-active")
                link.classList.remove("active")

                if (secAtt == linkAtt) {
                    link.classList.add("active")
                }
                
            })
        }
    })
}    
//---------------------------->swiper


let swipreSlides  = new Swiper(".mySwiper", {

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        loop: true,
    },
    draggable: true,
    
    autoplay: {
        delay: 5000,
    }
});

//------------------------------->clear inputs
let clearBtn = document.querySelector(".form-btn")
let inps = document.querySelectorAll("input , textarea  ")
let selects = document.querySelectorAll("select")
let options = document.querySelectorAll("option")
clearBtn.addEventListener("click", clearInps) 
function clearInps() {
    inps.forEach(inp => {
        inp.value = ""
    })
}
//---------------------------------->filter blogs 
let meals = document.querySelectorAll(".meal")
let blogs = document.querySelectorAll(".blog-boxs")

meals.forEach(meal => {
    meal.addEventListener("click", changeMealClass)
    meal.addEventListener("click" , filterData)
})

function changeMealClass() {
    meals.forEach(meal => {
        meal.classList.remove("active")
        this.classList.add("active")
    })
}
function filterData() {
    blogs.forEach(blog => {
        blog.classList.remove("active")
        document.querySelectorAll(this.dataset.filter).forEach(blog => {
            blog.classList.add("active")
        })
    })
}