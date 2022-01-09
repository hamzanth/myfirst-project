selectElement = s => document.querySelector(s);
selectElement(".open").addEventListener("click", (e)=>{
	selectElement(".toggler").classList.add("active");
});
selectElement(".closes").addEventListener("click", (e)=>{
	selectElement(".toggler").classList.remove("active");
});
slideIndex = 0;
console.log("The first index is" + slideIndex);
showSlides()
function showSlides(){
    let i = 0;
    slides = document.querySelectorAll(".myslide");
    for(i=0; i<slides.length; i++){
        slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000);
}
let catterlist = document.querySelectorAll(".catter li.cat");
let desc = document.querySelectorAll(".catter .desc");
console.log(catterlist);
let catter = selectElement(".catter");
for(let i=0; i<catterlist.length; i++)
	{
		catterlist[i].addEventListener("mouseover", (e) =>{
		desc[i].style.display = "flex";
		console.log(desc[i]);
		catter.classList.add("rad");
		});
		catterlist[i].addEventListener("mouseout", (e) =>{
		desc[i].style.display = "none";
		catter.classList.remove("rad");
		});
	}