const showPhone = () => {
    const phone = document.querySelector('.header-contacts__phone-number-accord');
    const arrow = document.querySelector('.header-contacts__arrow');

    arrow.addEventListener('click', () => {
        const phoneLink = phone.querySelector('a');
        phoneLink.classList.toggle('active');
        phone.classList.toggle('active');
    });
};

export default showPhone;