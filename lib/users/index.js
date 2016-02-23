var Schema = require('./schema')
var axios = require('axios')

module.exports = {
  remove: remove,
  updateEmail: updateEmail,
  bulkUpdate: bulkUpdate
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

function updateEmail (eventObject) {
  eventObject = _validate(Schema.updateEmail, eventObject)
  return axios.post('/users/updateEmail', eventObject)
}

function bulkUpdate (eventObject) {
  eventObject = _validate(Schema.bulkUpdate, eventObject)
  return axios.post('/users/bulkUpdate', eventObject)
}

