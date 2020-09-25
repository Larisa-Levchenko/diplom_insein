const phoneValidator = () => {
    for (let i = 0; i < 6; i++) {
        const linkPhone = document.querySelector(`#feedback-input${i+1}`);       
        linkPhone.autocomplete = "off";
        linkPhone.pattern = "[+][7][(][0-9]{3}[)][0-9]{3}[-][0-9]{2}[-][0-9]{2}";
        linkPhone.addEventListener('input', () => {
            linkPhone.value = linkPhone.value.replace(/[^0-9()+-]/i, "");
        });
    }
};

export default phoneValidator;