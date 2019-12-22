let currentselectedimage = 0;
const prevbutton = document.querySelector(".prev");
const nextbutton = document.querySelector(".next");
const gallery = document.querySelectorAll(".gallery-img");

nextbutton.addEventListener("click", function() {
  gallery[currentselectedimage].classList.remove("active");
  currentselectedimage++;
  gallery[currentselectedimage].classList.add("active");
  prevbutton.disabled = false;
  if (gallery.length - 1 === currentselectedimage) nextbutton.disabled = true;
});

prevbutton.addEventListener("click", function() {
  gallery[currentselectedimage].classList.remove("active");
  currentselectedimage--;
  gallery[currentselectedimage].classList.add("active");
  nextbutton.disabled = false;

  if (currentselectedimage === 0) {
    prevbutton.disabled = true;
  }
});
