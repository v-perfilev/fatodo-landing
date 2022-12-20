const SCRIPT_APP_DOMAIN = 'http://app.fatodo.app';
const SCRIPT_AUTH_URL = SCRIPT_APP_DOMAIN + '/scripts/authorization-check.html';
const SCRIPT_IFRAME_ID = 'auth_ifr';

function addIframeToBody() {
  const iframe = document.createElement('iframe');
  iframe.setAttribute('id', SCRIPT_IFRAME_ID);
  iframe.setAttribute('style', 'display:none;');
  iframe.setAttribute('src', SCRIPT_AUTH_URL);
  document.body.appendChild(iframe);
}

function getWin() {
  const iframe = document.getElementById(SCRIPT_IFRAME_ID);
  let win;
  try {
    win = iframe.contentWindow;
  } catch (e) {
    win = iframe.contentWindow;
  }
  return win;
}

function sendRequest() {
  const win = getWin();
  win.postMessage('*', '*');
}

function readResponse(event) {
  if (event.origin === SCRIPT_APP_DOMAIN && event.data === true) {
    window.location.replace(SCRIPT_APP_DOMAIN);
  }
}

function checkAuthorization() {
  window.onmessage = readResponse;
  addIframeToBody();
  sendRequest();
}

if (document.body != null) {
  checkAuthorization();
} else {
  window.onload = checkAuthorization;
}
