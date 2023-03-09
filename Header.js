function openMenu() {

    console.log("opened")
}
const hamburgerButton = document.querySelector(".hamburger-menu");
const Header = document.querySelector(".u-header")
console.log(Header)
const hamburgerMenu = document.querySelector(".mobile-nav");
hamburgerButton.addEventListener("click", function () {
    if (hamburgerButton.classList.contains("is-active")) {
        hamburgerButton.classList.remove("is-active"); 
        hamburgerMenu.classList.remove("is-active");
        Header.classList.remove("fixed");

    }
    else {
        hamburgerButton.classList.add("is-active"); 
        hamburgerMenu.classList.add("is-active");
        Header.classList.add("fixed");
    }
}) 