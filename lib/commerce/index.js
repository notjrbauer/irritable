var Schema = require('./schema')
var axios = require('axios')

module.exports = {
  trackPurchase: trackPurchase
}

function _validate (validator, eventObject) {
  validator(eventObject)

  if (validator.errors) {
    return Promise.reject(new Error(JSON.stringify(validator.errors)))
  }
  return eventObject
}

function trackPurchase (eventObject) {
  eventObject = _validate(Schema.trackPurchase, eventObject)
  return axios.post('/commerce/trackPurchase', eventObject)
}
