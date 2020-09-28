const dotSlider = () => {
    const sliderDot = (target, slide, position, arrowLeft, arrowRight) => {
        const slideHeight = slide[0].getBoundingClientRect().width;
        if (target.closest(`${arrowLeft}`) || target.closest(`${arrowRight}`)) {
            if (target.closest(`${arrowLeft}`)) {
                if (position > 0) {
                    position--;
                }
            }
            if (target.closest(`${arrowRight}`)) {
                if (screen.width - slideHeight / 2 < slide[slide.length - 1].getBoundingClientRect().right) {                    
                    position++;
                }
            }
            slide.forEach((item) => {
                item.style.transform = `translateX(-${position*slideHeight}px)`;
            });
        }
        return position;
    };

    const design = document.querySelector('.designs');
    const designDot = document.querySelectorAll('.designs-nav__item_base');
    let positionDesignDot = 0;
    design.addEventListener('click', (event) => {
        positionDesignDot = sliderDot(
            event.target,
            designDot,
            positionDesignDot,
            '#nav-arrow-designs_left',
            '#nav-arrow-designs_right'
        );
    });

    const designPopup = document.querySelector('.popup-design');
    const designPopupDot = document.querySelectorAll('.designs-nav__item');
    let positionDesignPopupDot = 0;
    designPopup.addEventListener('click', (event) => {
        positionDesignPopupDot = sliderDot(
            event.target,
            designPopupDot,
            positionDesignPopupDot,
            '#nav-arrow-popup-designs_left',
            '#nav-arrow-popup-designs_right'
        );
    });

    const scheme = document.querySelector('.scheme');
    const schemeDot = document.querySelectorAll('.scheme-nav__item');
    let positionSchemeDot = 0;

    scheme.addEventListener('click', (event) => {
        positionSchemeDot = sliderDot(
            event.target,
            schemeDot,
            positionSchemeDot,
            '#nav-arrow-scheme_left',
            '#nav-arrow-scheme_right'
        );

    });

    const repair = document.querySelector('.repair-types');
    const repairDot = document.querySelectorAll('.repair-types-nav__item');
    let positionRepairDot = 0;

    repair.addEventListener('click', (event) => {
        positionRepairDot = sliderDot(
            event.target,
            repairDot,
            positionRepairDot,
            '#nav-arrow-repair-left_base',
            '#nav-arrow-repair-right_base'
        );

    });

};

export default dotSlider;
