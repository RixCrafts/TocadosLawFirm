
document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.getElementById("checkbox-2");
    const fakeCheckbox = document.querySelector(".w-checkbox-input--inputType-custom");
    const checkboxLabel = document.querySelector(".checkbox-field");
    
    // Initilization
    fakeCheckbox.classList.remove("w--redirected-checked");
    

    console.log("Checkbox checked:", checkbox.checked);
    console.log("Fake checkbox classList:", fakeCheckbox.classList);


    checkboxLabel.addEventListener("click", function () {
        console.log("Checkbox label clicked");
        fakeCheckbox.classList.toggle("w--redirected-checked");

        console.log("Fake checkbox classList:", fakeCheckbox.classList);
    });
});

// ES - EN switch
document.addEventListener("DOMContentLoaded", function () {
    const langLink = document.querySelector('.language-change-link');
    if (!langLink) return;

    // Check if the current URL is the translated (Spanish) version
    const isSpanish = window.location.href.includes('_x_tr_tl=es');

    // Toggle link text
    langLink.textContent = isSpanish ? 'EN' : 'ES';

    // Optionally, update the href to switch between EN and ES
    // If you want the link to always switch to the other language:
    if (isSpanish) {
        langLink.href = window.location.origin.replace('.translate.goog', '') || '/';
    } else {
        langLink.href = 'https://tocadoslaw-com.translate.goog/?_x_tr_sch=http&_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=en&_x_tr_pto=wapp';
    }
});