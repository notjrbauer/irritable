var axios = require('axios')
var assertOk = require('assert-ok')
var objectAssign = require('object-assign')

var events = require('./events')
var commerce = require('./commerce')

/**
 * @private
 */
var URL = 'http://api.iterable.com/api/'
var TIMEOUT = 3 * 1000 // 3 seconds
var RESPONSE_TYPE = 'json'

module.exports = irritable

function irritable (opts) {
  var options = {
    baseURL: opts.baseUrl || URL,
    timeout: opts.timeout || TIMEOUT,
    responseType: opts.responseType || RESPONSE_TYPE
  }

  var env = process.env
  var token = env.ITERABLE_TOKEN || opts.token

  assertOk(token, 'Missing token')

  options.params = {
    api_key: token
  }

  objectAssign(axios.defaults, options)

  return {
    Events: events,
    Commerce: commerce
  }
}

