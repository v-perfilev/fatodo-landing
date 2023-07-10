const SCRIPT_APP_DOMAIN = 'https://client.fatodo.app';
const SCRIPT_AUTH_URL = SCRIPT_APP_DOMAIN + '/scripts/authorization-check.html';
const SCRIPT_IFRAME_ID = 'auth_ifr';

function addIframeToBody() {
  const iframe = document.createElement('iframe');
  iframe.addEventListener('load', function () {
    console.log('loaded!');
    iframe.contentWindow.postMessage('*', '*');
  });
  iframe.setAttribute('id', SCRIPT_IFRAME_ID);
  iframe.setAttribute('style', 'display:none;');
  iframe.setAttribute('src', SCRIPT_AUTH_URL);
  document.body.appendChild(iframe);
}

function onMessage(event) {
  console.log(event);
  if (event.origin === SCRIPT_APP_DOMAIN) {
    console.log('Fatodo Authorization Check: response received');
    if (event.data === true) {
      window.location.replace(SCRIPT_APP_DOMAIN);
    }
  }
}

window.addEventListener('message', onMessage, false);

if (document.body != null) {
  addIframeToBody();
} else {
  window.onload = addIframeToBody;
}
