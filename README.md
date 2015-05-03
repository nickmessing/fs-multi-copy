# fs-multi-copy
Node.JS copy multiple files

  	var fsMultiCopy = require('fs-multi-copy')
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
  	  //files copied
  	})
