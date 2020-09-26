const partnersSlider = () => {
    const partners = document.querySelector('.partners');
    let positionPartners = 0;
    const slidePartners = document.querySelectorAll('.partners-slider__slide');

    partners.addEventListener('click', (event) => {
        const target = event.target;
        const slideHeight = slidePartners[0].getBoundingClientRect().height;
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
            console.log(positionPartners);
            slidePartners.forEach((item) => {
                item.style.transform = `translateY(-${positionPartners*slideHeight}px)`;
            });
        }

    });
};

export default partnersSlider;