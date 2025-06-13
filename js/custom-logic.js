
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

// ...existing code...
document.addEventListener('DOMContentLoaded', function () {
    var langBtn = document.getElementById('lang-switch-btn');
    var langLabel = document.querySelector('#lang-switch-label');

    // Check if the current URL is the translated (Spanish) version
    const isSpanish = window.location.href.includes('_x_tr_tl=es');

    langLabel.textContent = isSpanish ? 'EN' : 'ES';

    if (langBtn) {
        langBtn.addEventListener('click', function () {
            if(!isSpanish){
                // Redirect to Spanish version (adjust URL as needed)
                window.location.href = 'https://tocadoslaw-com.translate.goog/?_x_tr_sch=http&_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=en&_x_tr_pto=wapp';
            }else{
                // Redirect to English version (adjust URL as needed)
                window.location.href = window.location.origin.replace('.translate.goog', '') || '/';
            }
        });
    }
});
  // ...existing code...