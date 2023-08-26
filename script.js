
$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }
    });
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation script
    var typed = new Typed(".typing", {
        strings: ["Full Stack Developer -MongoDB, Express.js, React.js & Node.js", "Mathematics Enthusiast", "Problem Solver", "React Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
        fadeOut: true,
      });
  
      var typed2 = new Typed(".typing-2", {
        strings: ["MongoDB", " Express.js ", " React.js", "Node.js"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
      });
});

     // Scroll to top button script
      const btnScrollToTop = document.querySelector("#btnScrollToTop");

      btnScrollToTop.addEventListener("click", function(){
        window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    });