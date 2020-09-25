const showHint = () =>{
    const formulaItem = document.querySelectorAll('.formula-item__icon-inner-text');
    formulaItem.forEach((item) => {
        const hint = document.querySelector(`.formula-item-popup-${item.innerText}`);
        const inner = item.previousElementSibling;
        item.addEventListener('mouseover', () => {
            inner.classList.add('active-item');
            hint.style.visibility = 'visible';
            hint.style.opacity = '1'; 
        });
        item.addEventListener('mouseout', () => {
            inner.classList.remove('active-item');
            hint.style.visibility = '';
            hint.style.opacity = '';
        });
    });
};

export default showHint;