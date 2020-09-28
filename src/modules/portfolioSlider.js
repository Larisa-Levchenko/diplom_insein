const portfolioSlider = () =>{
    const portfolio = document.querySelector('.portfolio');
    let positionPortfolio = 0;
    const slidePortfolio = document.querySelectorAll('.portfolio-slider__slide');
    const portfolioPopup = document.querySelector('.popup-dialog-portfolio');
    const portfolioArrowLeft = document.getElementById('portfolio-arrow_left');
    const portfolioArrowRight = document.getElementById('portfolio-arrow_right');
    portfolio.addEventListener('click', (event) => {
        const target = event.target;
        const slideWidth = slidePortfolio[0].getBoundingClientRect().width;

        if (target.closest('#portfolio-arrow_right') !== null || target.closest('#portfolio-arrow_left') !== null) {
            if (target.closest('#portfolio-arrow_left') !== null) {
                if (positionPortfolio > 0) {
                    positionPortfolio--;
                    portfolioArrowRight.style.display = 'flex';
                    if (positionPortfolio === 0) {
                        portfolioArrowLeft.style.display = 'none';
                    }
                }
            }

            if (target.closest('#portfolio-arrow_right') !== null) {
                if (screen.width < slidePortfolio[slidePortfolio.length - 1].getBoundingClientRect().right) {
                    positionPortfolio++;
                    portfolioArrowLeft.style.display = 'flex';
                    if (screen.width + slideWidth > slidePortfolio[slidePortfolio.length - 1].getBoundingClientRect().right) {
                        portfolioArrowRight.style.display = 'none';
                    }
                }

            }

            slidePortfolio.forEach((item) => {
                item.style.transform = `translateX(-${positionPortfolio*slideWidth}px)`;
            });
        }
    });


};
export default portfolioSlider;