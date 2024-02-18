document.addEventListener("DOMContentLoaded", function () {const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", function () {if (window.scrollY > 0) {navbar.classList.add("scrolled");} else {navbar.classList.remove("scrolled");}});});
var swiper = new Swiper(".blog-slider", {spaceBetween: 30, effect: "fade", loop: true,mousewheel: {invert: false,}, pagination: {el: ".blog-slider__pagination", clickable: true,},});
$(".submit").click(function () {return false;});
$(document).ready(function () {$(".trigger").click(function () {$(".modal-wrapper").toggleClass("open");$(".page-wrapper").toggleClass("blur");return false;});});

