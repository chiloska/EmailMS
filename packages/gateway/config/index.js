const {NODE_ENV} = process.env;
const configDev = require('./config.dev');
const configProd = require('./config.prod');

module.exports = NODE_ENV === 'production' ? configProd : configDev; 