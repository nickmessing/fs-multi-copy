var fs = require('fs')
var fsMultiCopy = require('../lib/index.js')

fs.writeFileSync('tmp.0', '0')
fs.writeFileSync('tmp.1', '1')

fsMultiCopy([
  {
    from: 'tmp.0',
    to: 'tmp.0.out'
  },
  {
    from: 'tmp.1',
    to: 'tmp.1.out'
  }
], function (err) {
  if (err) {
    throw err
  }

  if (fs.readFileSync('tmp.0.out', 'utf8') === '0' && fs.readFileSync('tmp.1.out', 'utf8') === '1') {
    console.log('Success')
  } else {
    throw new Error('Failed')
  }

  fs.unlinkSync('tmp.0')
  fs.unlinkSync('tmp.1')
  fs.unlinkSync('tmp.0.out')
  fs.unlinkSync('tmp.1.out')
})
