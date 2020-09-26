const schemeSlider = () => {
    const scheme = document.querySelector('.scheme');
    const schemeDot = document.querySelectorAll('.scheme-nav__item');
    const schemeItem = document.querySelectorAll('.scheme-slider__slide');
    const schemeBlock = document.querySelectorAll('.scheme-description-block');
    let positionScheme = 0;

    scheme.addEventListener('click', (event) => {
        const target = event.target;
        const slideHeight = schemeItem[0].getBoundingClientRect().height;
        if (target.closest('.scheme-nav__item')) {
            schemeDot.forEach((item, index) => {
                if (item === target) {
                    item.classList.add('active');
                    positionScheme = index;
                } else {
                    item.classList.remove('active');
                }
            });
            schemeItem.forEach((item) => {
                item.style.transform = `translateY(-${positionScheme*slideHeight}px)`;
            });
            schemeBlock.forEach((item, index) => {
                if (index === positionScheme) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });

        }
    });
};

export default schemeSlider;