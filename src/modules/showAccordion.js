const showAccordion = () => {
    const msgTitle = document.querySelectorAll('.title_block');

    const accordion = document.querySelector('.accordion');
    accordion.addEventListener('click', (event) => {
        const target = event.target;
        if (target.closest('.title_block')) {
            msgTitle.forEach((item) => {
                if (item === target) {
                    item.classList.add('msg-active');
                } else {
                    item.classList.remove('msg-active');
                }
            });
        }
    });
};

export default showAccordion;