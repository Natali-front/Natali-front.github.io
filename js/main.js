let btnsContainer = document.querySelector('.btns-container');
let backButton = document.querySelector('.slick-next');
let nextButton = document.querySelector('.slick-prev');

$('.adv-type').slick({
    dots: true,
    arrows: true,
    
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
    // Array.from(btns)
    // btns.filter(btn => btn.classList.contains('active'))
    // .map(btn => btn.classList.remove('active'));
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