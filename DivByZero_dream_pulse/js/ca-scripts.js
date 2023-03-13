var customerName = "Alliance  ";

// <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->
function addCustomerName() {

    let title = document.getElementById('title')
    title.textContent = customerName;
    
    // <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->
    let header = document.getElementById('tm-header')
    header.textContent = customerName;

    // <h2 id="introheader" class="tm-section-title mb-5 text-uppercase tm-color-primary"></h2> <!--todo: Add Customer Name-->
    let introhead = document.getElementById('introheader')
    introheader.textContent = customerName;
};

function toggleColors() {
    // <!-- todo: Change all classes named 'tm-white-rect' to 'tm-blue-rect' -->
    let el = document.querySelectorAll('.tm-white-rect');

    for (i = 0; i < el.length; ++i) {
        el[i].classList.add('tm-blue-rect');
        el[i].classList.remove('tm-white-rect');
    }
};

function hideElement() {
   var socialLink = document.querySelector('.tm-social-links')
   socialLink.style.visibility = "hidden";
   
   //<ul class="nav flex-row tm-social-links">  <!--todo: Hide social links-->

};

 function addText() {
    //<p id="intropara1" class="tm-color-gray">  <!--todo: Add customer company introduction text about their founding year-->
    let intro = document.getElementById('intropara1')
    intro.textContent = "Alliance was founded in 1931 by Jason Smith.";

    //<p id="intropara2" class="mb-0 tm-color-gray"> <!--todo: Add customer company introduction text about what they lead in-->
    let intro2 = document.getElementById('intropara2');
    intro2.textContent = "We are a global leader is doing rad stuff";

     //<p id="aboutpara1" id="a" class="mb-5"> <!--todo: Add customer company about text-->
     let aboutpg = document.getElementById('aboutpara1');
     aboutpg.textContent = "Need to add cutomer company text here";

    //<p id="aboutpara2"> <!--todo: Add customer company motto text-->
    let aboutpg2 = document.getElementById('aboutpara2');
    aboutpg2.textContent = "Doing rad stuff";

    // <p id="addresspara" class="mb-3"> <!--todo: Add customer company phone number text-->
    let aboutpg3 = document.getElementById('addresspara');
    aboutpg3.textContent = "702-588-8789";
}; 



