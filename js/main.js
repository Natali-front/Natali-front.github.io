let btnsContainer = document.querySelector('.btns-container');
let backButton = document.querySelector('.slick-next');
let nextButton = document.querySelector('.slick-prev');


$('.adv-type').slick({
    dots: true,
    arrows: true,
    
}); 

var menu = document.querySelector(".menu__box")
var ham = document.querySelector(".ham")
var xIcon = document.querySelector(".close-icon")
var menuIcon = document.querySelector(".menu-icon")

ham.addEventListener("click", toggleMenu)

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    xIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    xIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

var menuItems = document.querySelectorAll(".menu__item")

menuItems.forEach(
  function (menuItem) {
    menuItem.addEventListener("click", toggleMenu)
  }
);

$(document).ready(function(){
  $('.menu__box a').each(function () {
  if (this.href == location.href) $(this).addClass('active');
  });
  });


function clearClass(arrElements, classNameEl) {
    for(let i = 0; i < arrElements.length; i++) {
        const btn = arrElements[i];
        if(btn.classList.contains(classNameEl)) {
            btn.classList.remove(classNameEl)
        }
    }
}

    btnsContainer.addEventListener('click', function(e) {
    let currentEl = e.target;
    if(!currentEl.classList.contains('btn')) return;

    let btn = currentEl;
    if(btn.classList.contains('active')) return;

    let btns = this.querySelectorAll('.btn');
    clearClass(btns, 'active');
    btn.classList.add('active');

    let items = document.querySelectorAll('.item');
    let btnId = btn.id;
    clearClass(items, 'hide');

    if(btnId === 'item-all') return;

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        
        let dataValue = item.dataset.item;
        if(dataValue !== btnId) {
            item.classList.add('hide');
        }
    }
});


