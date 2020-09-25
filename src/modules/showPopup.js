const showPopup = () => {
    const popupRepair = document.querySelector('.popup-dialog');
    const popupPrivacy = document.querySelector('.popup-dialog-privacy');


    document.body.addEventListener('click', (event) => {
        const target = event.target;
        if (
          target.closest('.no-overflow') !== null ||
          target.closest('.link-list-repair') !== null ||
          target.closest('.link-privacy') !== null
        ) {
          if (target.closest('.link-privacy') !== null) {
            popupPrivacy.style.visibility = 'visible';
          } else {
            popupRepair.style.visibility = 'visible';
          }
        } else {
          if (target.closest('.popup-dialog') === null) {
            popupRepair.style.visibility = '';
          }
          if (target.closest('.popup-dialog-privacy') === null) {
            popupPrivacy.style.visibility = '';
          }
        }
    });

};
export default showPopup;