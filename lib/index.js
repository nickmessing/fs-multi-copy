var ncp = require('ncp').ncp

module.exports = function (arr, callback) {
  var callbackCalled = false
  var processed = 0
  var l = arr.length

  var callCallback = function () {
    if (callbackCalled) {
      return
    }

    callback.apply(null, arguments)
    callbackCalled = true
  }

  if (arr.constructor !== Array) {
    return callCallback(new Error('Wrong input.'))
  }

  for (var i = 0; i < l; i++) {
    if (arr[i] === null || arr[i].constructor !== Object
      || Object.keys(arr[i]).length !== 2
      || typeof arr[i].from !== 'string'
      || typeof arr[i].to !== 'string') {
      return callCallback(new Error('Wrong input.'))
    }
  }

  arr.forEach(function (element) {
    ncp(element.from, element.to, function (err) {
      if (err) {
        return callCallback(err)
      }

      if (++processed === l) {
        callCallback()
      }
    })
  })
}
