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
    const isSpanish = window.location.href.includes('/es-US/');
    console.log("Is Spanish:", isSpanish); 

    if (langBtn) {
        langBtn.addEventListener('click', function () {
            let path = window.location.pathname;
            let search = window.location.search;
            let newPath;

            if (isSpanish) {

                // Remove '/es-US/' from the path
                newPath = path.replace('/es-US/', '/');
            } else {
                // Insert '/es-US/' before the file name
                newPath = path.replace(/\/([^\/]+\.html)$/, '/es-US/$1');
            }

            window.location.href = newPath + search;
        });
    }
});