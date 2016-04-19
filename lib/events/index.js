var Schema = require('iterable-json-schema').events
var axios = require('axios')

module.exports = {
  track: track,
  trackPushOpen: trackPushOpen
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
