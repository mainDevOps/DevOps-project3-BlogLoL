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
})




