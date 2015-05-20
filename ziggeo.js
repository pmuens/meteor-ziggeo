var script = document.createElement('script');
script.setAttribute('type', 'text/javascript');
script.setAttribute('src', 'https://assets-cdn.ziggeo.com/js/ziggeo-v1.js');

var stylesheet = document.createElement('link');
stylesheet.setAttribute('rel', 'stylesheet');
stylesheet.setAttribute('src', 'https://assets-cdn.ziggeo.com/css/ziggeo-v1.css');

document.getElementsByTagName('head')[0].appendChild(script);
document.getElementsByTagName('head')[0].appendChild(stylesheet);
