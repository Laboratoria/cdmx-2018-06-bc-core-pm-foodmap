// Configura tus test para usarlos
global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');
