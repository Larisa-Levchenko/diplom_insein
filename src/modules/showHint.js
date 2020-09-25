const showHint = () => {
    const plusItem = document.querySelectorAll('.formula-item__icon-inner-text');
    const problemItem = document.querySelectorAll('.svg-wrap');
    const el = document.querySelector('.problems-item-popup-3');
    el.classList.add('active');
   // el.style.transform = 'rotate(180deg)';
    const show = (items) => {
        items.forEach((item) => {
            const inner = item.previousElementSibling;
            const hint = inner.previousElementSibling;
            item.addEventListener('mouseover', () => {                             
                inner.classList.add('active-item');
                hint.style.visibility = 'visible';
                hint.style.opacity = '1';
                if (hint.getBoundingClientRect().top < 0) {
                    hint.classList.add('active');
                }
            });
            item.addEventListener('mouseout', () => {
                inner.classList.remove('active-item');
                hint.classList.remove('active');
                hint.style.visibility = '';
                hint.style.opacity = '';
            });
        });
    };
    show(plusItem);
    show(problemItem);
};

export default showHint;