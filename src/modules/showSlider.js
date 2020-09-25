const showSlider = () =>{
    const slider = (target, slide, position, arrowLeft, arrowRight) => {
        const slideHeight = slide[0].getBoundingClientRect().height;
        if (target.closest(`${arrowLeft}`) || target.closest(`${arrowRight}`)) {
            if (target.closest(`${arrowLeft}`)) {
                if (position > 0) {
                    position--;
                }
            }
            if (target.closest(`${arrowRight}`)) {
                if (position < slide.length - 1) {
                    position++;
                }
            }
            slide.forEach((item) => {
                item.style.transform = `translateY(-${position*slideHeight}px)`;
            });
        }
        return position;
    };

    const repairSlider = document.querySelector('.types-repair1');

    const repair = document.querySelector('.repair-types');
    let positionRepair = 0;
    const slideRepair = repairSlider.querySelectorAll('.repair-types-slider__slide');

    repair.addEventListener('click', (event) => {
        positionRepair = slider(event.target, slideRepair, positionRepair, '#repair-types-arrow_left', '#repair-types-arrow_right');
    });


    const reviews = document.querySelector('.reviews');
    let positionReviews = 0;
    const slideReviews = document.querySelectorAll('.reviews-slider__slide');

    reviews.addEventListener('click', (event) => {
        positionReviews = slider(event.target, slideReviews, positionReviews, '#reviews-arrow_left', '#reviews-arrow_right');
    });

    const designsSlider = document.querySelector('.designs-slider__style1');

    const designs = document.querySelector('.designs');
    let positionDesign = 0;
    const slideDesign = designsSlider.querySelectorAll('.designs-slider__style-slide');
    //const countDesign = document.querySelector('.slider-counter-content__current');

    designs.addEventListener('click', (event) => {
        positionDesign = slider(event.target, slideDesign, positionDesign, '#design_left', '#design_right');
    });

};

export default showSlider;