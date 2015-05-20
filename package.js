Package.describe({
  name: 'goltfisch:ziggeo',
  summary: 'Ziggeo library for Meteor',
  version: '0.1.1',
  git: 'https://github.com/goltfisch/meteor-ziggeo.git'
});

Package.onUse(function (api) {
  api.addFiles('ziggeo.js', 'client');
});
