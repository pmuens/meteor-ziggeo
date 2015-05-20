var script = document.createElement('script');
script.setAttribute('type', 'text/javascript');
script.setAttribute('src', 'https://assets.ziggeo.com/js/ziggeo-jquery-json2-betajs-player.min.js');

var stylesheet = document.createElement('link');
stylesheet.setAttribute('rel', 'stylesheet');
stylesheet.setAttribute('src', 'https://assets.ziggeo.com/css/ziggeo-betajs-player.min.css');

document.getElementsByTagName('head')[0].appendChild(script);
document.getElementsByTagName('head')[0].appendChild(stylesheet);
