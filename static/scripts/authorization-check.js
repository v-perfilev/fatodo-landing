const SCRIPT_APP_DOMAIN = 'https://client.fatodo.app';
const SCRIPT_AUTH_URL = SCRIPT_APP_DOMAIN + '/scripts/authorization-check.html';
const SCRIPT_IFRAME_ID = 'auth_ifr';

function addIframeToBody() {
  const iframe = document.createElement('iframe');
  iframe.setAttribute('id', SCRIPT_IFRAME_ID);
  iframe.setAttribute('style', 'display:none;');
  iframe.setAttribute('src', SCRIPT_AUTH_URL);
  document.body.appendChild(iframe);
}

function sendRequest() {
  const iframe = document.getElementById(SCRIPT_IFRAME_ID);
  let win;
  try {
    win = iframe.contentWindow;
  } catch (e) {
    win = iframe.contentWindow;
  }

  const inter = window.setInterval(function () {
    if (win.document.readyState === 'complete') {
      window.clearInterval(inter);
      console.log('post!!!!!');
      win.postMessage('*', '*');
    }
  }, 50);
}

function checkAuthorization() {
  console.log('Fatodo Authorization Check: started');
  addIframeToBody();
  sendRequest();
}

window.addEventListener('message', function (event) {
  console.log(event);
  if (event.origin === SCRIPT_APP_DOMAIN) {
    console.log('Fatodo Authorization Check: response received');
    if (event.data === true) {
      window.location.replace(SCRIPT_APP_DOMAIN);
    }
  }
});

if (document.body != null) {
  checkAuthorization();
} else {
  window.onload = checkAuthorization;
}
