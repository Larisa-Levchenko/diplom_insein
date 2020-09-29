const portfolioSlider = () =>{
    const portfolio = document.querySelector('.portfolio');
    let positionPortfolio = 0;
    const slidePortfolio = document.querySelectorAll('.portfolio-slider__slide');
    const portfolioPopup = document.querySelector('.popup-dialog-portfolio');
    const portfolioArrowLeft = document.getElementById('portfolio-arrow_left');
    const portfolioArrowRight = document.getElementById('portfolio-arrow_right');

    const portfolioMobile = document.querySelector('.portfolio-slider-mobile')
    const slidePortfolioMobile = portfolioMobile.querySelectorAll('.portfolio-slider__slide-frame');
    let positionPortfolioMobile = 0;
    const portfolioTotal = portfolio.querySelector('.slider-counter-content__total');
    const portfolioCurrent = portfolio.querySelector('.slider-counter-content__current');
    const portfolioMobileArrowLeft = document.getElementById('portfolio-arrow-mobile_left');
    const portfolioMobileArrowRight = document.getElementById('portfolio-arrow-mobile_right');
    portfolioMobileArrowLeft.style.display = 'none';
    portfolioTotal.innerHTML = slidePortfolioMobile.length;

    portfolio.addEventListener('click', (event) => {
        const target = event.target;       

        if (target.closest('#portfolio-arrow_right') !== null || target.closest('#portfolio-arrow_left') !== null) {
            const slideWidth = slidePortfolio[0].getBoundingClientRect().width;
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
        
        if (target.closest('#portfolio-arrow-mobile_right') !== null || target.closest('#portfolio-arrow-mobile_left') !== null) {
            const slideHeight = slidePortfolioMobile[0].getBoundingClientRect().height;
            if (target.closest('#portfolio-arrow-mobile_left') !== null) {
                if (positionPortfolioMobile > 0) {
                    positionPortfolioMobile--; 
                    portfolioMobileArrowRight.style.display = 'block';
                    if (positionPortfolioMobile === 0){
                        portfolioMobileArrowLeft.style.display = 'none';                        
                    }
                }
            }
            if (target.closest('#portfolio-arrow-mobile_right') !== null) {
                if (positionPortfolioMobile < slidePortfolioMobile.length-1) {
                    positionPortfolioMobile++;
                    portfolioMobileArrowLeft.style.display = 'block';
                    if (positionPortfolioMobile === slidePortfolioMobile.length - 1){
                        portfolioMobileArrowRight.style.display = 'none';
                    }
                }

            }
            portfolioCurrent.innerHTML = positionPortfolioMobile + 1;
            slidePortfolioMobile.forEach((item) => {
                item.style.transform = `translateY(-${
              slideHeight * positionPortfolioMobile}px`;             
             
            });
            
        }
    });


};
export default portfolioSlider;