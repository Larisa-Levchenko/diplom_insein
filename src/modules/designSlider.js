const designSlider = () => {
    const design = document.querySelector('.designs');
    const slideDesign = document.querySelectorAll('.designs-slider__style-slide');
    const itemDesign = document.querySelectorAll('.designs-nav__item_base');
    const previewDesign = document.querySelectorAll('.preview-block');
    let positionDesign = 0;

    const arrDesign = [
        `${document.querySelectorAll('.designs-slider__style-slide.scand').length}`,
        `${document.querySelectorAll('.designs-slider__style-slide.trad').length}`,
        `${document.querySelectorAll('.designs-slider__style-slide.loft').length}`,
        `${document.querySelectorAll('.designs-slider__style-slide.minimal').length}`,
        `${document.querySelectorAll('.designs-slider__style-slide.modern').length}`
    ];

    design.addEventListener('click', (event) => {
        const target = event.target;
        const slideHeight = slideDesign[0].getBoundingClientRect().height;
        if (target.closest('.designs-nav__item_base')) {
            previewDesign.forEach((item) => {
                item.classList.remove('visible');
            });
            itemDesign.forEach((item, index) => {
                if (item === target) {
                    item.classList.add('active');
                    previewDesign[index].classList.add('visible');
                    positionDesign = 0;
                    for (let i = 0; i < index; i++) {
                        positionDesign += +arrDesign[i];
                    }
                    slideDesign.forEach((item) => {
                        item.style.transform = `translateY(-${positionDesign*slideHeight}px)`;
                    });
                } else {
                    item.classList.remove('active');
                }
            });
        }

    });

};
export default designSlider;
