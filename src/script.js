document.getElementById("menuBtn").addEventListener("click", function () {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("hidden");
});

document.getElementById("closeBtn").addEventListener("click", () => {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("hidden");
});

const headerRef = document.getElementById("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    headerRef.classList.add("bg-teal-800");
    headerRef.style.padding = "2px";
  } else {
    headerRef.classList.remove("bg-teal-800");
    headerRef.style.padding = "0px";
  }
});
