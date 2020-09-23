const toggleMenu = () => {
    const menu = document.querySelector('.popup-dialog-menu');
    document.body.addEventListener('click', (event) => {
        const target = event.target;
        if (screen.width > 576) {
            if (target.closest('.menu__icon') !== null) {
                menu.classList.add('active');
            } else if (target.closest('.popup-dialog-menu') === null || target.closest('.close-menu') !== null || target.closest('.menu-link') !== null) {
                menu.classList.remove('active');
            }
        } else {
            if (target.closest('.menu__icon') !== null) {
                menu.classList.add('active-mini');
            } else if (target.closest('.popup-dialog-menu') === null || target.closest('.close-menu') !== null || target.closest('.menu-link') !== null) {
                menu.classList.remove('active-mini');
            }
        }
    });
};

export default toggleMenu;