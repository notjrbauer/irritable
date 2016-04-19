var axios = require('axios')
var Schema = require('iterable-json-schema').workflow

module.exports = {
  triggerWorkflow: triggerWorkflow
}

function validate (validator, eventObject) {
  validator(eventObject)

  if (validator.errors) {
    return Promise.reject(new Error(JSON.stringify(validator.errors)))
  }
  return Promise.resolve(eventObject)
}

function triggerWorkflow (eventObject) {
  return validate(Schema.trigger, eventObject)
    .then(function (params) {
      return axios.post('/workflows/triggerWorkflow', params)
    })
}
