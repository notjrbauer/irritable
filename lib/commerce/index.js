var Schema = require('./schema')
var axios = require('axios')

module.exports = {
  trackPurchase: trackPurchase,
  updateCart: updateCart
}

function validate (validator, eventObject) {
  validator(eventObject)

  if (validator.errors) {
    return Promise.reject(new Error(JSON.stringify(validator.errors)))
  }
  return Promise.resolve(eventObject)
}

function trackPurchase (eventObject) {
  return validate(Schema.trackPurchase, eventObject)
    .then(function (params) {
      return axios.post('/commerce/trackPurchase', eventObject)
    })
}

function updateCart (eventObject) {
  return validate(Schema.updateCart, eventObject)
    .then(function (params) {
      return axios.post('/commerce/updateCart', params)
    })
}
