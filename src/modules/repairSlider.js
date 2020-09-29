const repairSlider = () => {
    const repair = document.querySelector('.repair-types');
    const btnRepair = document.querySelectorAll('.repair-types-nav__item');
    const blockDefault = document.querySelector('.types-repair1');    
    const repairTotal = document.querySelector('.slider-counter-content__total');
    const repairCurrent = document.querySelector('.slider-counter-content__current');

    let repairSlide = blockDefault.querySelectorAll('.repair-types-slider__slide');
    repairTotal.innerHTML = repairSlide.length;    
    let positionRepairDot = 0;
   
    repair.addEventListener('click', (event) => {
        const target = event.target;
        if (target.closest('.repair-types-nav__item')) {
            btnRepair.forEach((item, index) => {
                if (item === target) {
                    item.classList.add('active');
                    positionRepairDot = index;
                } else {
                    item.classList.remove('active');
                }
            });
            for (let i = 0; i < 5; i++) {
                const block = document.querySelector(`.types-repair${i+1}`);
                if (i === positionRepairDot) {
                    block.style.display = 'block';
                    repairSlide = block.querySelectorAll('.repair-types-slider__slide');
                    repairTotal.innerHTML = repairSlide.length;
                    repairCurrent.innerHTML = '1';
                } else {
                    block.style.display = 'none';
                }
            }
        }
        if (
          target.closest("#repair-types-arrow_left") !== null ||
          target.closest("#repair-types-arrow_right") !== null
        ) {
          const slideHeight = repairSlide[0].getBoundingClientRect().height;
          if (target.closest("#repair-types-arrow_left") !== null) {
            if (+repairCurrent.innerHTML > 1) {
              repairCurrent.innerHTML = +repairCurrent.innerHTML - 1;
            }
          }

          if (target.closest("#repair-types-arrow_right") !== null) {
            if (+repairCurrent.innerHTML < repairTotal.innerHTML) {
              repairCurrent.innerHTML = +repairCurrent.innerHTML + 1;
            }
          }

          repairSlide.forEach((item) => {
            item.style.transform = `translateY(-${
              (+repairCurrent.innerHTML - 1) * slideHeight
            }px)`;
          });
        }

    });
};

export default repairSlider;