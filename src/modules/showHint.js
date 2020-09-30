const showHint = () => {
    const formula = document.querySelector('.formula');
    const formulaItem = document.querySelectorAll('.formula-item__icon-inner-text');
    const formulaSlide = document.querySelectorAll('.formula-slider__slide');
    const formulaSlider = document.querySelector('.formula-slider');
    const formulaMobile = formula.querySelector('.desktop-hide');
    const formulaPopup = formulaMobile.querySelectorAll('.formula-item-popup');
    let positionFormula = 0;

    const problem = document.querySelector('.problems');
    const problemItem = document.querySelectorAll('.svg-wrap');
    const problemSlide = document.querySelectorAll('.problems-slider__slide');
    let positionProblem = 0;    

    const show = (items) => {
        items.forEach((item) => {
            const inner = item.previousElementSibling;
            const hint = inner.previousElementSibling;
            item.addEventListener('mouseover', () => {
                inner.classList.add('active-item');
                if (hint.getBoundingClientRect().top > 0) {
                    hint.style.visibility = 'visible';
                    hint.style.opacity = '1';
                }
            });
            item.addEventListener('mouseout', () => {
                inner.classList.remove('active-item');
                hint.style.visibility = '';
                hint.style.opacity = '';

            });
        });
    };
    const showFormulaPopup = () => {
        const slideHeight = formulaSlide[0].getBoundingClientRect().height;
        const popupHeight = formulaPopup[positionFormula].getBoundingClientRect().height;
        formulaSlide[positionFormula].style.marginBottom = `${popupHeight*1.5}px`;
        formulaSlider.style.minHeight = `${slideHeight+popupHeight*1.5}px`;
        formulaSlider.style.height = `${slideHeight+popupHeight*1.5}px`;
        formulaPopup[positionFormula].style.visibility = 'visible';
        formulaPopup[positionFormula].style.opacity = 1;
    };

    if (screen.width > 1024) {
        show(formulaItem);
        show(problemItem);
    } else {
        showFormulaPopup();
        formula.addEventListener('click', (event) => {
            const target = event.target;
            const slideHeight = formulaSlide[0].getBoundingClientRect().height;
            if (target.closest('#formula-arrow_left') || target.closest('#formula-arrow_right')) {
                if (target.closest('#formula-arrow_left')) {
                    if (positionFormula > 0) {
                        positionFormula--;
                    }
                }
                if (target.closest('#formula-arrow_right')) {
                    if (positionFormula < formulaSlide.length - 1) {
                        positionFormula++;
                    }
                }

                formulaSlide.forEach((item) => {
                    item.style.marginBottom = 0;
                    item.style.transform = `translateY(-${positionFormula*slideHeight}px)`;
                });
                formulaPopup.forEach((item) => {
                    item.style.visibility = '';
                    item.style.opacity = 0;
                });
                showFormulaPopup();
            }

        });
        problem.addEventListener('click', (event) => {            
            const target = event.target;
            const slideHeight = problemSlide[0].getBoundingClientRect().height;
            if (target.closest('#problems-arrow_left') || target.closest('#problems-arrow_right')) {
                if (target.closest('#problems-arrow_left')) {
                    if (positionProblem > 0) {
                        positionProblem--;
                    }
                }
                if (target.closest('#problems-arrow_right')) {
                    if (positionProblem < problemSlide.length - 1) {
                        positionProblem++;
                    }
                }                
                problemSlide.forEach((item, index) => {
                    if (index === positionProblem) {
                        item.classList.add('active-item');
                        item.style.opacity = 1;
                    }else{
                        item.classList.remove('active-item');
                        item.style.opacity=0;
                    }
                    item.style.transform = `translateY(-${positionProblem*slideHeight}px)`;
                });
            }
        });
    }

};

export default showHint;