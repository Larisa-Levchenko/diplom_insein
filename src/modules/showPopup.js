const showPopup = () => {
  const popupRepair = document.querySelector('.popup-repair-types');
  const popupPrivacy = document.querySelector('.popup-privacy');
  const popupConsultation = document.querySelector('.popup-consultation');
  const popupDoc = document.querySelector('.popup-transparency');

  document.body.addEventListener('click', (event) => {
    const target = event.target;
    if (
      target.closest('.no-overflow') !== null ||
      target.closest('.link-list-repair') !== null ||
      target.closest('.link-privacy') !== null ||
      target.closest('.button_wide') !== null ||
      target.closest('.transparency-item__img') !== null
    ) {
      if (target.closest('.link-privacy') !== null) {
        popupPrivacy.style.visibility = 'visible';
      } else if (target.closest('.button_wide') !== null) {
        popupConsultation.style.visibility = 'visible';
      } else if (target.closest('.transparency-item__img') !== null) {
        popupDoc.style.visibility = 'visible';
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
      if (target.closest('.feedback-wrap') === null || target.closest('.close-consultation') !== null) {
        popupConsultation.style.visibility = '';
      }
      if (target.closest('.popup-dialog-transparency') === null){
         popupDoc.style.visibility = '';
      }
    }
  });

};

export default showPopup;