var Schema = require('./schema')
var axios = require('axios')

module.exports = {
  track: track,
  trackPushOpen: trackPushOpen,
  trackConversion: trackConversion
}

function validate (validator, eventObject) {
  validator(eventObject)

  if (validator.errors) {
    return Promise.reject(new Error(JSON.stringify(validator.errors)))
  }
  return Promise.resolve(eventObject)
}

// Events
function track (eventObject) {
  return validate(Schema.track, eventObject)
    .then(function (params) {
      return axios.post('/events/track', params)
    })
}

function trackPushOpen (eventObject) {
  return validate(Schema.trackPushOpen, eventObject)
    .then(function (params) {
      return axios.post('/events/trackPushOpen', eventObject)
    })
}

function trackConversion (eventObject) {
  return validate(Schema.trackConversion, eventObject)
    .then(function (params) {
      return axios.post('/events/trackConversion', eventObject)
    })
}
