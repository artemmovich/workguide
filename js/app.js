
const menuBtn = document.querySelector(".menu-btn");
const titleBtn = document.querySelector(".intro__title");
const menuMobile = document.querySelector(".menu-mobile");
const navBar = document.getElementsByClassName("menu-item");

menuBtn.addEventListener('click', () => {
   menuMobile.classList.toggle('menu--open'),
      menuBtn.classList.toggle('active');
})


titleBtn.addEventListener('click', () => {
   menuMobile.classList.toggle('menu--open');
   menuBtn.classList.toggle('active');
});
function handleNavBarClick() {
   menuMobile.classList.toggle("menu--open"),
   menuBtn.classList.toggle('active');
}
for (let i = 0; i < navBar.length; i++) {
   navBar[i].addEventListener("click", handleNavBarClick);
 }


jQuery(document).ready(function ($) {
   let header = $("#header");
   let intro = $("#intro");
   let nav = $("#nav");

   let introH = intro.innerHeight();
   let scroll = $(window).scrollTop();
   checkScroll(scroll, introH);
   


   $(window).on("scroll  resize", function () {
      let introH = intro.innerHeight();
      scrollPos = $(this).scrollTop();
      console.log(scrollPos);
      checkScroll(scrollPos, introH)
   });
   function checkScroll(scrollPos, introH) {
      if (scrollPos > 544 ) {
         header.addClass("fixed");
      } else {
         header.removeClass("fixed");
      }
   };
   $("a.menu__link").on("click", function (event) {
      $("html, body").animate({
         scrollTop: elementOffset - 100
      }, 800);
      event.preventDefault();

      let elementId = $(this).data('scroll');
      let elementOffset = $(elementId).offset().top;
      nav.removeClass("menu--open");
   });

})

