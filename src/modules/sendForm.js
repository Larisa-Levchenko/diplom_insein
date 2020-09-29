const sendForm = () => {
    const forms = document.querySelectorAll('form');
    const popupThank = document.querySelector('.popup-thank');
    
    const postDate = (body, outputDate, errorData) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            if (request.readyState !== 4) {
                return;
            }
            if (request.status === 200) {
                outputDate();
            } else {
                errorData(request.status);
            }
        });
        request.open('POST', './server.php');
        request.setRequestHeader('Content-Type', 'multipart/form-data');
        request.send(JSON.stringify(body));

    };

    forms.forEach((form) => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(form);           
            const checkbox = form.querySelector('.checkbox__input');
            
            if (checkbox.checked === false) {
                const createMessage = document.createElement('p');
                createMessage.textContent = 'Заполни согласие с политикой конфиденциальности';
                createMessage.classList.add('error-message');
                createMessage.style.cssText = 'color: red';               
                form.append(createMessage);
            } else {
                const elem = form.querySelector('.error-message');
                if(elem!==null){
                    elem.remove();
                }
                for (let i = 0; i < form.length - 1; i++) {
                    form[i].value = '';
                }

                let body = {};
                formData.forEach((value, key) => {
                    body[key] = value;
                });

                postDate(
                    body,
                    () => {
                         popupThank.style.visibility = 'visible';
                    },
                    (error) => {
                        console.log('error:', error);
                    }
                );
            }

        });
    });

};
export default sendForm;