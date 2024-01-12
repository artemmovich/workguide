jQuery(document).ready(function ($) {
   let header = $("#header");
   let intro = $("#intro");
   let nav = $("#nav");
   
   let introH = intro.innerHeight();
   let scrollPos = $(window).scrollTop();
   checkScroll(scrollPos, introH);


   $(window).on("scroll  resize", function () {
      let introH = intro.innerHeight();
      scrollPos = $(this).scrollTop();
      console.log(scrollPos);
      checkScroll(scrollPos, introH)
   });
   function checkScroll(scrollPos, introH) {
      if (scrollPos > introH) {
         header.addClass("fixed");
      } else {
         header.removeClass("fixed");
      }
   };
   $("[data-scroll]").on("click", function (event) {
      event.preventDefault();

      let elementId = $(this).data('scroll');
      let elementOffset = $(elementId).offset().top;
      nav.removeClass("show");

      $("html, body").animate({
         scrollTop: elementOffset - 70
      }, 700);
   });

})
const menuBtn = document.querySelector(".menu-btn")
const titleBtn = document.querySelector(".intro__title")
const menuMobile = document.querySelector(".menu-mobile")
menuBtn.addEventListener('click', () => {
   menuMobile.classList.toggle('menu--open');
})
titleBtn.addEventListener('click', () => {
   menuMobile.classList.toggle('menu--open');
});


