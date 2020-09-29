const showSlider = () => {
    const transformSlide = (slide,position) =>{
        const slideHeight = slide[0].getBoundingClientRect().height;
        slide.forEach((item) => {
            item.style.transform = `translateY(-${position*slideHeight}px)`;
        });
    };
    const slider = (target, slide, position, arrowLeft, arrowRight) => {        
        if (target.closest(`${arrowLeft}`) || target.closest(`${arrowRight}`)) {
            if (target.closest(`${arrowLeft}`)) {
                if (position > 0) {
                    position--;
                }
            }
            if (target.closest(`${arrowRight}`)) {
                if (position < slide.length - 1) {
                    position++;
                }
            }
            transformSlide(slide, position);
        }
        return position;
    };

    //reviews
    const reviews = document.querySelector('.reviews');
    let positionReviews = 0;
    const slideReviews = document.querySelectorAll('.reviews-slider__slide');

    reviews.addEventListener('click', (event) => {
        positionReviews = slider(
            event.target,
            slideReviews,
            positionReviews,
            '#reviews-arrow_left',
            '#reviews-arrow_right'
        );
    });


    //documents    
    const documents = document.querySelector('.transparency');    
    const slideDocument = document.querySelectorAll('.transparency-item');
    let positionDocument = 0;

    const documentsPopup = document.querySelector('.popup-transparency');    
    const slideDocumentPopup = document.querySelectorAll('.popup-transparency-slider__slide');
    const documentPopupCounter = document.querySelector('#transparency-popup-counter');
    const documentPopupTotal = documentPopupCounter.querySelector('.slider-counter-content__total');
    const documentPopupCurrent = documentPopupCounter.querySelector('.slider-counter-content__current');
    let positionDocumentPopup = 0;
    documentPopupTotal.innerHTML = slideDocumentPopup.length;    
   
    documents.addEventListener('click', (event) => {
        let target = event.target;
        if (target.closest('.transparency-item__img') !== null) {
            documentsPopup.style.visibility = 'visible';
            target = target.closest('.transparency-item');
            slideDocument.forEach((item, index) => {
                if(item===target){
                    positionDocumentPopup=index;
                    transformSlide(slideDocumentPopup, positionDocumentPopup);
                    documentPopupCurrent.innerHTML = positionDocumentPopup + 1;
                }
            });
        }
        positionDocument = slider(
            target,
            slideDocument,
            positionDocument,
            '#transparency-arrow_left',
            '#transparency-arrow_right'
        );
    });

    documentsPopup.addEventListener('click', (event) => {
        const target = event.target;
        if (target.closest('.popup-dialog-transparency') === null) {
            documentsPopup.style.visibility = '';
        }
        positionDocumentPopup = slider(
            target,
            slideDocumentPopup,
            positionDocumentPopup,
            '#transparency_left',
            '#transparency_right'
        );
        documentPopupCurrent.innerHTML = positionDocumentPopup + 1;
    });
   

};

export default showSlider;