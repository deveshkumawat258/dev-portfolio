window.onload = () => {
  // Typing effect
  const typingText = "Hi, I'm Devesh 👋";
  let i = 0;
  function typeWriter() {
    if (i < typingText.length) {
      document.getElementById("typing").innerHTML += typingText.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }
  typeWriter();

  // Dark Mode Toggle
  const toggleBtn = document.getElementById("toggle-mode");
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  // Scroll reveal
  const reveals = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    }
  }

  window.addEventListener("scroll", revealOnScroll);
};
