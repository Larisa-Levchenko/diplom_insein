const designSlider = () => {
    const design = document.querySelector('.designs');
    const designSlide = document.querySelectorAll('.designs-slider__style-slide');
    const designDot = document.querySelectorAll('.designs-nav__item_base');
    const designPreview = document.querySelectorAll('.preview-block');
    const designPreviewSlide = document.querySelectorAll('.preview-block__item-inner');
    const designTotal = design.querySelector('.slider-counter-content__total');
    const designCurrent = design.querySelector('.slider-counter-content__current');
    let positionDesign = 0;
    let positionDesignDot = 0;

    const arrDesign = [
        `${document.querySelectorAll('.designs-slider__style-slide.scand').length}`,
        `${document.querySelectorAll('.designs-slider__style-slide.trad').length}`,
        `${document.querySelectorAll('.designs-slider__style-slide.loft').length}`,
        `${document.querySelectorAll('.designs-slider__style-slide.minimal').length}`,
        `${document.querySelectorAll('.designs-slider__style-slide.modern').length}`
    ];

    const getDot = (target, dot,total,current) =>{  
        let position = 0;
        dot.forEach((item, index) => {
            if (item === target) {
                item.classList.add('active');
                position=index;              
            } else {
                item.classList.remove('active');
            }            
        });
        total.innerHTML = arrDesign[position];
        current.innerHTML = 1;
        return position;
    };

    const getPosition = (dot) =>{
        let position = 0;
        for (let i = 0; i < dot; i++) {
            position += +arrDesign[i];
        }
        return position;
    };

    design.addEventListener('click', (event) => {
        const target = event.target;
        const slideHeight = designSlide[0].getBoundingClientRect().height;
        if (
          target.closest('.designs-nav__item_base') !== null ||
          target.closest('.preview-block__item-inner') !== null ||
          target.closest('#design_left') !== null ||
          target.closest('#design_right') !== null
        ) {
          if (target.closest('.designs-nav__item_base') !== null) {
              designPreview.forEach((item) => {
                  item.classList.remove('visible');
              });
              positionDesignDot = getDot(
                  target,
                  designDot,
                  designTotal,
                  designCurrent
              );
              designPreview[positionDesignDot].classList.add('visible');
              positionDesign = getPosition(positionDesignDot);
          }

          if (target.closest('.preview-block__item-inner') !== null) {
            designPreviewSlide.forEach((item, index) => {
              if (item === target) {
                positionDesign = index;
              }
            });
          }

          if (target.closest('#design_left') !== null) {
              if (+designCurrent.innerHTML > 1) {
                  positionDesign--;
                  designCurrent.innerHTML = positionDesign - getPosition(positionDesignDot) + 1;                  
              }
          }

          if (target.closest('#design_right') !== null) {
              if (+designCurrent.innerHTML < arrDesign[positionDesignDot]) {
                  positionDesign++;
                  designCurrent.innerHTML = positionDesign - getPosition(positionDesignDot) + 1;                  
              }
          }

          designSlide.forEach((item) => {
              item.style.transform = `translateY(-${
              positionDesign * slideHeight}px)`;
          });
        }  

    });

    const designPopup = document.querySelector('.popup-dialog-design');
    const designPopupSlide = document.querySelectorAll('.popup-design-slider__style-slide');
    const designPopupDot = document.querySelectorAll('.designs-nav__item_popup');
    const designPopupBlock = document.querySelectorAll('.popup-design-text');
    const designPopupTotal = designPopup.querySelector('.slider-counter-content__total');
    const designPopupCurrent = designPopup.querySelector('.slider-counter-content__current');
    let positionDesignPopup = 0;
    let positionDesignPopupDot = 0;

    designPopup.addEventListener('click', (event) => {
        const target = event.target;
        const slideHeight = designPopupSlide[0].getBoundingClientRect().height;
        if (
          target.closest('.designs-nav__item_popup') !== null ||
          target.closest('#popup_design_right') !== null ||
          target.closest('#popup_design_left') !== null
        ) {
           if (target.closest('.designs-nav__item_popup') !== null){
                positionDesignPopupDot = getDot(
                    target,
                    designPopupDot,
                    designPopupTotal,
                    designPopupCurrent
                );
                positionDesignPopup = getPosition(positionDesignPopupDot);

                designPopupBlock.forEach((item, index) => {
                    if (index === positionDesignPopupDot) {
                        item.classList.add('visible-content-block');
                    } else {
                        item.classList.remove('visible-content-block');
                    }
                });
           }
           if (target.closest('#popup_design_right') !== null) {
                if (+designPopupCurrent.innerHTML < arrDesign[positionDesignPopupDot]) {
                    positionDesignPopup++;
                    designPopupCurrent.innerHTML = positionDesignPopup - getPosition(positionDesignPopupDot) + 1;
                }
           }

           if (target.closest('#popup_design_left') !== null) {
                if (+designPopupCurrent.innerHTML > 1) {
                    positionDesignPopup--;
                    designPopupCurrent.innerHTML = positionDesignPopup - getPosition(positionDesignPopupDot) + 1;
                }
           }

          designPopupSlide.forEach((item) => {
            item.style.transform = `translateY(-${
              slideHeight * positionDesignPopup}px)`;
          });
        }

    });

};
export default designSlider;
