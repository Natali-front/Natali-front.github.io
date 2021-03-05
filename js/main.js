let backButton = document.querySelector('.slick-next');
let nextButton = document.querySelector('.slick-prev');

$('.adv-type').slick({
    dots: true,
    arrows: true,
    
}); 
// $(document).ready(function() {

//     $(".toggle-mnu").click(function() {
//       $(this).toggleClass("on");
//       $(".top-nav").toggle();
//       return false;
//     });
//   });
// $(document).click(function(event) {
//     if (!$(event.target).closest('#menu__box, #checkOpen').length) {
//       if ($('#menu__box').is(":visible")) {
//         document.getElementById("menu__box").style.width = "0px";
//       }
//     }
//   })
$('#menu-hamburger').on('click', function() {
    if (!$(this).hasClass('clicked')) { // если класса нет
      $(this).addClass('clicked'); // добавляем класс
      document.getElementsByClassName('menu__box')[0].style.left = '0'; // код для первого клика
    } else { // если есть
      $(this).removeClass('clicked'); // убираем класс
      document.getElementsByClassName('menu__box')[0].style.left = '-100%'; // код для второго клика
    }
  });