



//slider-services
var swiper = new Swiper(".mySwiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
    },
});

    //модальное окно для services

let backgroundModal = document.querySelector('.background-modal');
let buttonsOpenModal = document.querySelectorAll('.button-open-modal');

//перебираем кнопки
buttonsOpenModal.forEach(function(item) {
    //по клику на кнопку
    item.addEventListener('click', function() {
        //находим модальное окно с id равным значению дата атрибута кнопки
        const modalWindow = document.querySelector('#' + this.dataset.modal);
        //фону и мод присв класс 
        backgroundModal.classList.add('visibility');
        modalWindow.classList.add('visibility');
        
        //находим в этом окне кнопку закрыть
        let buttonCloseModal = modalWindow.querySelector('.button-close-modal');
        //при клике убираем класс у фона и мод
        buttonCloseModal.addEventListener('click', function() {
            backgroundModal.classList.remove('visibility');
            modalWindow.classList.remove('visibility');
        });

        //при клике на фон убираем класс у фона и мод
        backgroundModal.addEventListener('click', function() {
            backgroundModal.classList.remove('visibility');
            modalWindow.classList.remove('visibility');
        });
    });
});


//слайдер splide
document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '#image-carousel', {
    type   : 'loop',
    perPage: 2,
    gap: '20px',
    focus  : 'center',
//      type   : 'loop',
//   padding: '5%',
    
    // width : '100vw',
    // height: '100vh',

    breakpoints: {
        1100: {
            // perPage: 1
        },
        850: {
            perPage: 1,
            arrows: false,
        }
    }
     
  


    } );
        splide.mount();
    } );

  

  

  const menuBtn = document.querySelector(".menu-burger-button");
  const menuClose = document.querySelector(".menu-burger");
  const menuList = document.querySelector(".menu-burger");
  const menuBackground = document.querySelector(".background-modal");
  
  menuBtn.addEventListener("click", () => {
  menuList.classList.toggle("menu-burger--open");
  menuBackground.classList.toggle("visibility");
  });
  menuBackground.addEventListener("click", () => {
  menuList.classList.remove("menu-burger--open");
  menuBackground.classList.remove("visibility");
  });
  menuClose.addEventListener("click", () => {
  menuList.classList.remove("menu-burger--open");
  menuBackground.classList.remove("visibility");
  });


