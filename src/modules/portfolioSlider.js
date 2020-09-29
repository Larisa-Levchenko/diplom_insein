const portfolioSlider = () =>{
    const portfolio = document.querySelector('.portfolio');
    const portfolioSlider = document.querySelector('.portfolio-slider');
    const slidePortfolio = portfolioSlider.querySelectorAll('.portfolio-slider__slide-frame');
    const slideBlockPortfolio = document.querySelectorAll('.portfolio-slider__slide');
    const portfolioArrowLeft = document.getElementById('portfolio-arrow_left');
    const portfolioArrowRight = document.getElementById('portfolio-arrow_right');
    let positionPortfolio = 0;
    
    const portfolioMobile = document.querySelector('.portfolio-slider-mobile');
    const slidePortfolioMobile = portfolioMobile.querySelectorAll('.portfolio-slider__slide-frame');    
    const portfolioTotal = portfolio.querySelector('.slider-counter-content__total');
    const portfolioCurrent = portfolio.querySelector('.slider-counter-content__current');
    const portfolioMobileArrowLeft = document.getElementById('portfolio-arrow-mobile_left');
    const portfolioMobileArrowRight = document.getElementById('portfolio-arrow-mobile_right');
    let positionPortfolioMobile = 0;
    portfolioMobileArrowLeft.style.display = 'none';
    portfolioTotal.innerHTML = slidePortfolioMobile.length;

    const portfolioPopup = document.querySelector('.popup-portfolio');
    const portfolioPopupSlide = document.querySelectorAll('.popup-portfolio-slider__slide');
    const portfolioPopupText = document.querySelectorAll('.popup-portfolio-text');
    const portfolioPopupArrowLeft = document.getElementById('popup_portfolio_left');
    const portfolioPopupArrowRight = document.getElementById('popup_portfolio_right');

    console.log(portfolioPopupArrowLeft);
    const transformPopup = (position) => {
        //const slideHeight = portfolioPopupSlide[0].getBoundingClientRect().height;
        //portfolioPopupSlide.forEach((item) => {
        //    item.style.transform = `translateY(-${position*slideHeight}px)`;
        //});
        portfolioPopupText.forEach((item,index)=>{
            if(index===position){
                item.style.display='flex';
            }else{
                item.style.display = 'none';
            }

        });
    };

    portfolio.addEventListener('click', (event) => {
        const target = event.target;       

        if (target.closest('#portfolio-arrow_right') !== null || target.closest('#portfolio-arrow_left') !== null) {
            const slideWidth = slideBlockPortfolio[0].getBoundingClientRect().width;
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
                if (screen.width < slideBlockPortfolio[slideBlockPortfolio.length - 1].getBoundingClientRect().right) {
                    positionPortfolio++;
                    portfolioArrowLeft.style.display = 'flex';
                    if (screen.width + slideWidth > slideBlockPortfolio[slideBlockPortfolio.length - 1].getBoundingClientRect().right) {
                        portfolioArrowRight.style.display = 'none';
                    }
                }

            }

            slideBlockPortfolio.forEach((item) => {
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
            
        } else if (target.closest('.portfolio-slider__slide-frame') !== null) {
            portfolioPopup.style.visibility = 'visible';
            if(screen.width>574){
                slidePortfolio.forEach((item, index) => {
                    if (item === target) {
                        console.log(index);
                        transformPopup(index);
                    }
                });
            }
            

        }
    });

    portfolioPopup.addEventListener('click', (event) => {
        const target = event.target;
        if (target.closest('.popup-dialog-portfolio') === null) {
             portfolioPopup.style.visibility = '';
        }
    });


};
export default portfolioSlider;