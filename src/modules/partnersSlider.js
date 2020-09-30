const partnersSlider = () => {
    const partners = document.querySelector('.partners');
    const partnersSlider = document.querySelector('.partners-slider');
    let positionPartners = 0;
    const slidePartners = document.querySelectorAll('.partners-slider__slide');

    const slideHeight = slidePartners[0].getBoundingClientRect().height;
    partnersSlider.style.height = `${slideHeight}px`;
    partnersSlider.style.minHeight = `${slideHeight}px`;

    partners.addEventListener('click', (event) => {
        const target = event.target;
        
        if (target.closest('#partners-arrow_left') || target.closest('#partners-arrow_right')) {
            if (target.closest('#partners-arrow_left')) {
                if (positionPartners > 0) {
                    positionPartners--;
                } else {
                    positionPartners = slidePartners.length - 1;
                }
            }
            if (target.closest('#partners-arrow_right')) {
                if (positionPartners < slidePartners.length - 1) {
                    positionPartners++;
                } else {
                    positionPartners = 0;
                }
            }
            slidePartners.forEach((item) => {
                item.style.transform = `translateY(-${positionPartners*slideHeight}px)`;
            });
        }

    });
};

export default partnersSlider;