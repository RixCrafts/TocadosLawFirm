console.info("Custom JavaScript loaded successfully.");

document.addEventListener("DOMContentLoaded", function () {

    // ------------------------ Contact Form Logic
    const fakeCheckbox = document.querySelector(".w-checkbox-input--inputType-custom");
    const checkboxLabel = document.querySelector(".checkbox-field");
    
    // Initilization
    fakeCheckbox.classList.remove("w--redirected-checked");

    checkboxLabel.addEventListener("click", function () {
        fakeCheckbox.classList.toggle("w--redirected-checked");
    });


    // ------------------------- Language Switch Logic
    const langBtn = document.getElementById('lang-switch-btn');
    const isSpanish = window.location.hostname.includes('.translate.goog');

    if( isSpanish) {
        document.querySelector('.language-switch-top').style.display = 'none';
    }else{
        document.querySelector('.language-switch-top').style.display = 'flex';
    }  
    
    if (langBtn) {
        langBtn.addEventListener('click', function () {
            window.location.href = "https://rixcrafts-github-io.translate.goog/TocadosLawFirm/?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=en&_x_tr_pto=wapp"
        });
    }
});