var Schema = require('./schema')
var axios = require('axios')

module.exports = {
  remove: remove
}

function _validate (validator, eventObject) {
  validator(eventObject)

  if (validator.errors) {
    return Promise.reject(new Error(JSON.stringify(validator.errors)))
  }
  return eventObject
}

function remove (eventObject) {
  eventObject = _validate(Schema.remove, eventObject)
  return axios.post('/users/delete', eventObject)
}

