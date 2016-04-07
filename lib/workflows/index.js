var axios = require('axios')
var Schema = require('./schema')

module.exports = {
  triggerWorkflow: triggerWorkflow
}

function _validate (validator, eventObject) {
  validator(eventObject)

  if (validator.errors) {
    return Promise.reject(new Error(JSON.stringify(validator.errors)))
  }
  return eventObject
}

function triggerWorkflow (eventObject) {
  eventObject = _validate(Schema.triggerWorkflow, eventObject)
  return axios.post('/workflows/triggerWorkflow', eventObject)
}
