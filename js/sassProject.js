let navButton = document.querySelector(".logo button");
let navbar = document.querySelector(".navbar");
navButton.onclick = function () {
    navbar.classList.toggle("hide");
    console.log(navbar);
}
// $(function () {
//     $('.the-toggler').on('click', function () {
//         $('.navbar').slideToggle();
//     });
// });