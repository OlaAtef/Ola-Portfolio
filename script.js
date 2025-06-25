
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

var submit_inp =document.getElementById('submit-inp');

var sidemenu = document.getElementById("sidemenu");

let menuActive = document.querySelectorAll('#header ul li a');
let section = document.querySelectorAll('section');


//About Tab Links............
function opentab( tabname ){

    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// show Menu Bar........
document.querySelector('#menu-icon').onclick = () =>{
    sidemenu.classList.toggle('active');
}

document.querySelector('#close-menu').onclick = () =>{
    sidemenu.classList.remove('active');
}


// FixedHeader

window.onscroll = ()=>{
    ScroollHeader();
}

let Header = document.getElementById('fixed-nav');
let x = 0;

function ScroollHeader(){
if(window.pageYOffset > x){
    Header.classList.add('FixedHeader');
}else{
    Header.classList.remove('FixedHeader');
}
}