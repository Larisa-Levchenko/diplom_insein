const showPopup = () => { 
  const popupPrivacy = document.querySelector('.popup-privacy');
  const popupConsultation = document.querySelector('.popup-consultation');
  const popupDesign = document.querySelector('.popup-design');


  document.body.addEventListener('click', (event) => {
    const target = event.target;
    if (    
      target.closest('.link-privacy') !== null ||
      target.closest('.button_wide') !== null ||
      target.closest('.link-list-designs') !== null
    ) {
      if (target.closest('.link-privacy') !== null) {
        popupPrivacy.style.visibility = 'visible';
      } else if (target.closest('.button_wide') !== null) {
        popupConsultation.style.visibility = 'visible';
      } else if (target.closest('.link-list-designs') !== null) {        
        popupDesign.style.visibility = 'visible';
      }
    } else {      
      if (target.closest('.popup-dialog-privacy') === null) {
        popupPrivacy.style.visibility = '';
      }
      if (target.closest('.feedback-wrap') === null || target.closest('.close-consultation') !== null) {
        popupConsultation.style.visibility = '';
      } 
      if (target.closest('.popup-dialog-design') === null) {
        popupDesign.style.visibility = '';
      }
    }
  });

};

export default showPopup;