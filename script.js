// ===============================
// MOBILE NAVIGATION
// ===============================

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("active");

});


// Close menu when a link is clicked

document.querySelectorAll(".site-nav a").forEach(link => {

    link.addEventListener("click", () => {

        navigation.classList.remove("active");

    });

});


// ===============================
// CURRENT YEAR
// ===============================

document.getElementById("year").textContent =
    new Date().getFullYear();