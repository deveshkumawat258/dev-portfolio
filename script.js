// Smooth Scroll (if anchor links are used later)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Form submission alert
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload
    alert("Shukriya bhai! Form submit ho gaya ✅");
    form.reset(); // Clear form after submission
  });
}
