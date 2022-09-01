export function animateOnScroll() {
  var reveals = document.querySelectorAll(".animateOnScroll");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 25;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
    //   else {
    //     reveals[i].classList.remove("active");
    //   }
  }
}
