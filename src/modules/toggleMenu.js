const toggleMenu = () => {
    let top = 0,
        blockTop;

    const getAnimation = () => {
        if (top < blockTop) {
            if (top + 200 > blockTop) {
                top = blockTop;
            } else {
                top = top + 200;
                window.requestAnimationFrame(getAnimation);
            }
        }
        window.scrollTo(0, top);
    };
    const getAnimationTop = () => {
        if (blockTop > top) {
            if (blockTop - 200 < top) {
                blockTop = 0;
            } else {
                blockTop = blockTop - 200;
                window.requestAnimationFrame(getAnimationTop);
            }
        }
        window.scrollTo(0, blockTop);
    };
    const getScroll = (event) => {
        event.preventDefault();
        const target = event.target.closest('a');
        const blockID = target.getAttribute("href").substr(1);
        const block = document.getElementById(blockID);
        top = 0;
        blockTop = block.getBoundingClientRect().top;

        if (target.closest('.menu-link')) {
            getAnimation();
        } else {
            blockTop = Math.abs(blockTop);
            getAnimationTop();
        }
    };
    const menu = document.querySelector('.popup-dialog-menu');
    document.body.addEventListener("click", (event) => {
      const target = event.target;
      if (target.closest(".menu__icon") !== null) {
        menu.classList.add("active");
      } else if (
        target.closest(".popup-dialog-menu") === null ||
        target.closest(".close-menu") !== null ||
        target.closest(".menu-link") !== null
      ) {
        if (
          target.closest(".menu-link") !== null &&
          target.closest(".no-overflow") === null
        ) {
          getScroll(event);
        }
        menu.classList.remove("active");
      }
      if (target.closest(".button-footer") !== null) {
        getScroll(event);
      }
    });
};

export default toggleMenu;