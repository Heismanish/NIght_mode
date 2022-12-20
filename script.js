"use strict";

const toggler = document.querySelector(".btn");
// document.querySelector(".btn").addEventListener("click", function () {
// 	toggler.classList.toggle(".tog");
// });
document.querySelector(".btn").addEventListener("click", () => {
	document.body.classList.toggle("dark");
	toggler.classList.toggle("darkbtn");
});
