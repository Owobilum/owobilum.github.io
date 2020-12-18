document.getElementById('toggler').addEventListener('click',()=>{
    document.querySelector('header').classList.toggle('nav-open')
})

document.querySelectorAll('.menu-item-link').forEach(link=>{
    link.addEventListener('click',()=>{
        document.querySelector('header').classList.toggle('nav-open')
    })
})
let bodyRect = document.documentElement.getBoundingClientRect(),
    myServices = document.getElementById('my-services').getBoundingClientRect(),
    myServicesOffset   = myServices.top - bodyRect.top;

bodyRect,
aboutMe = document.getElementById('about-me').getBoundingClientRect(),
aboutMeOffset = aboutMe.top - bodyRect.top;

document.querySelectorAll('.service').forEach(service=>{
        service.style.opacity=0;   
})
document.querySelectorAll('h2.my-services,button.my-services').forEach(service=>{
    service.style.opacity=0;   
})
document.querySelector('.box-seven').style.transform='rotate(90deg)'

window.addEventListener('scroll',()=>{
    let scrollPosition=document.documentElement.scrollTop
    if(myServicesOffset-scrollPosition<400){
        if(!document.documentElement.classList.contains('in-view')){
            document.documentElement.classList.add('in-view')
        }   
    }
    if(aboutMeOffset-scrollPosition<400){
        if(!document.documentElement.classList.contains('seven-in-view')){
            document.documentElement.classList.add('seven-in-view')
        }
    }    
})


