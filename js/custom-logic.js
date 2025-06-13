console.info("Custom JavaScript loaded successfully.");
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

    console.log('Language switch button:', langBtn);

    // Check if the current URL is the translated (Spanish) version
    const isSpanish = window.location.hostname.includes('.translate.goog');

    if( isSpanish) {
        document.querySelector('.language-switch-top').style.display = 'none';
    }else{
        document.querySelector('.language-switch-top').style.display = 'flex';
    }

    langLabel.innerText = isSpanish ? 'ES' : 'EN';    
    
    if (langBtn) {
        langBtn.addEventListener('click', function () {
            let currentUrl = window.location.href;
            console.log(`currentUrl: ${currentUrl}`);
            
            if (!isSpanish) {
                // Build translated URL dynamically
                const { protocol, host, pathname, search } = window.location;
                // Remove 'www.' if present for translation proxy
                let cleanHost = host.replace(/^www\./, '');
                let translatedHost = cleanHost + '.translate.goog';
                let translatedUrl = `${protocol}//${translatedHost}${pathname}${search}`;
                // Add translation parameters
                translatedUrl += (search ? '&' : '?') + '_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=en-US&_x_tr_pto=wapp';
                window.location.href = translatedUrl;
            } else {
                // Remove '.translate.goog' and everything after '?'
                // let url = window.location.href;
                // let noTranslate = url.replace('.translate.goog', '');
                // let cleanUrl = noTranslate.split('?')[0];
                // window.location.href = cleanUrl;
            }
        });
    }
});