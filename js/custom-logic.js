
document.addEventListener("DOMContentLoaded", function () {

    // ------------------------ Contact Form Logic
    const checkbox = document.getElementById("checkbox-2");
    const fakeCheckbox = document.querySelector(".w-checkbox-input--inputType-custom");
    const checkboxLabel = document.querySelector(".checkbox-field");
    
    // Initilization
    fakeCheckbox.classList.remove("w--redirected-checked");

    checkboxLabel.addEventListener("click", function () {
        fakeCheckbox.classList.toggle("w--redirected-checked");
    });


    // ------------------------- Language Switch Logic
    const langBtn = document.getElementById('lang-switch-btn');
    const langLabel = document.querySelector('#lang-switch-btn-label');

    // Check if the current URL is the translated (Spanish) version
    const isSpanish = window.location.href.includes('_x_tr_tl=es');

    langLabel.innerText = isSpanish ? 'ES' : 'EN';

    if (langBtn) {
        langBtn.addEventListener('click', function () {
            if (!isSpanish) {
                // Redirect to Spanish version (adjust URL as needed)
                window.location.href = 'https://rixcrafts-github-io.translate.goog/TocadosLawFirm/?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=en&_x_tr_pto=wapp';
            } else {
                // Redirect to English version (adjust URL as needed)
                // window.location.href = window.location.origin.replace('.translate.goog', '') || '/';
                window.location.href = 'https://rixcrafts-github-io/TocadosLawFirm/index.html';
            }
        });
    }
});