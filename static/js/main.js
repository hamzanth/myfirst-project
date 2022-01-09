// const date = new Date();
// document.querySelector('.year').innerHTML = date.getFullYear();
// setTimeout(function(){
//     $('#message').fadeOut('slow');
// }, 3000);
// alert("Hello ecom");
const selectElement = s => document.querySelector(s);
selectElement(".open").addEventListener("click", (e) => {
	selectElement(".nav-list").classList.add("active");
});
selectElement(".closed").addEventListener("click", (e) => {
	selectElement(".nav-list").classList.remove("active");
});