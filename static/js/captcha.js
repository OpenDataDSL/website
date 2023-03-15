import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

var _captchaTries = 0;

function recaptchaOnload() {
    if (ExecutionEnvironment.canUseDOM) {
        _captchaTries++;
        if (_captchaTries > 9) {
            return;
        }
        try {
            grecaptcha.render("recaptcha", {
                sitekey: '6LczjqUkAAAAACuHIEJpp3qDNKGqZtAV0k2aRBmr',
                callback: function() {
                    document.getElementById("form_submit").disabled = false;
                }
            });
            return;
        } catch (e) {}
        window.setTimeout(recaptchaOnload, 1000);
    }
}

export function loadReCaptcha() {
    _captchaTries = 0;
    recaptchaOnload();
}