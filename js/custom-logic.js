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

    if (langBtn) {
        langBtn.addEventListener('click', function () {
            let path = window.location.pathname;
            let search = window.location.search;
            let newPath;

            if (isSpanish) {

                // Remove '/es-US/' from the path
                if (path === '/es-US/' || path === '/es-US/index.html') {
                    newPath = '/index.html';
                } else {
                    newPath = path.replace('/es-US/', '/');
                }
                console.log("New Path (English):", newPath);
            } else {
                // Insert '/es-US/' before the file name
                if (path === '/' || path === '/index.html') {
                    newPath = '/es-US/index.html';
                } else {
                    newPath = path.replace(/\/([^\/]+\.html)$/, '/es-US/$1');
                }
                console.log("New Path (Spanish):", newPath);
            }

            window.location.href = newPath + search;
        });
    }
});