// modules - Encapsulated code (only share minimum)
const names = require('./3-names')
const sayHi = require('./4-utils')
const data = require('./5-alternative-export')

require('./6-mind-grenade')
sayHi('Marcos')
sayHi(names.peter)
sayHi(names.john)