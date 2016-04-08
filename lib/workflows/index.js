var axios = require('axios')
var Schema = require('./schema')

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
  return validate(Schema.triggerWorkflow, eventObject)
    .then(function (params) {
      return axios.post('/workflows/triggerWorkflow', params)
    })
}
