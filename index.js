require('babel-register')();
require('babel-polyfill');

if (process.env.NODE_ENV === 'production') {
  require('./server');
} else {
  require('./webpack.server');
}
