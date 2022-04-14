const innerHeader = document.getElementById("header").innerHTML = (
    `
    <nav id="container-nav"></nav>
    <nav id="burger-menu"></nav>
    `
)

const innerNavContainer = document.getElementById("container-nav").innerHTML = (
    `
    <a href="index.html"><img src="./src/Logo.png" class="logo"></a>
    <div id="burger-button">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
    </div>
    <div class="container-links">
        <ul>
            <li><a href="gallery.html">GALLERY</a></li>
            <li><a href="about.html">ABOUT US</a></li>
            <li><a href="contact.html">CONTACT</a></li>
            <li><a href="login.html">LOGIN</a></li>
        </ul>
    </div>
    `
)

const innerNavMenu = document.getElementById("burger-menu").innerHTML = (
    `
    <ul>
    <li><a href="gallery.html">GALLERY</a></li>
    <li><a href="about.html">ABOUT US</a></li>
    <li><a href="contact.html">CONTACT</a></li>
    <li><a href="login.html">LOGIN</a></li>
    </ul>
    `
)

const innerBurgerMenu = document.getElementById("burger-button").addEventListener('click', () => {
    const burgerBtn = document.getElementById("burger-button").classList.toggle("change")
    const showMenu = document.getElementById("burger-menu").classList.toggle("show-menu")
    const spaceMenu = document.getElementById('carouselExampleIndicators').classList.toggle('active-burger-menu')
})


const email = document.getElementById("email");
const pass = document.getElementById("mypassword");
const repass = document.getElementById("REppassword");
const birth = document.getElementById("dbirthday");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e=>{
    addEventListener.preventDefault();
    let warnings ="";
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    parrafo.innerHTML = "";
    if(nombre.value.length <6){
        aler("short name");
    }
    
    console.log(regexEmail)
    if(!regexEmail.test(email.value)){
        warnings += 'invalid email <br>';
        entrar = true;

    }
    if(pass.value.length <8){
        warnings += 'invalid password <br>';
        entrar = true;
    }
    if(repass.value.length == pass.value.length){
        warnings += 'invalid password <br>';
        entrar = true;
    }
    if(entrar){
        parrafo.innerHTML = warnings;
    }
    else{
        alert("success");
    }

})

/* emailjs.send(service_e53plim, template_zuxutbl, templateParams, user_Y41fnJgv1nj4ow0DJZfmZ); */