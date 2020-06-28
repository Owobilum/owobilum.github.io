function openMenu() {
    document.getElementById('nav-page').style.display="block";
}
var el=document.getElementById('burger-menu');
el.addEventListener('click',openMenu);

function closeMenu(){
    document.getElementById('nav-page').style.display="none";
}
var ko=document.getElementById('close-menu');
ko.addEventListener('click',closeMenu);

var hi=document.getElementsByClassName('menu')[0];
hi.addEventListener('click',closeMenu);




