var Schema = require('./schema')
var axios = require('axios')

module.exports = {
  track: track,
  trackPushOpen: trackPushOpen,
  trackConversion: trackConversion
}

function _validate (validator, eventObject) {
  validator(eventObject)

  if (validator.errors) {
    return Promise.reject(new Error(JSON.stringify(validator.errors)))
  }
  return eventObject
}
// Events
function track (eventObject) {
  eventObject = _validate(Schema.track, eventObject)
  return axios.post('/events/track', eventObject)
}

function trackPushOpen (eventObject) {
  eventObject = _validate(Schema.trackPushOpen, eventObject)
  return axios.post('/events/trackPushOpen', eventObject)
}

function trackConversion (eventObject) {
  eventObject = _validate(Schema.trackConversion, eventObject)
  return axios.post('/events/trackConversion', eventObject)
}

