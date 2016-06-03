var Schema = require('iterable-json-schema').users
var axios = require('axios')

module.exports = {
  remove: remove,
  update: update,
  updateEmail: updateEmail,
  bulkUpdate: bulkUpdate
}

function validate (validator, eventObject) {
  validator(eventObject)

  if (validator.errors) {
    return Promise.reject(new Error(JSON.stringify(validator.errors)))
  }
  return Promise.resolve(eventObject)
}

function remove (eventObject) {
  return validate(Schema.remove, eventObject)
    .then(function (params) {
      return axios.post('/users/delete', params)
    })
}

function update (eventObject) {
  return validate(Schema.updateUser, eventObject)
    .then(function (params) {
      return axios.post('/users/update', params)
    })
}

function updateEmail (eventObject) {
  return validate(Schema.updateEmail, eventObject)
    .then(function (params) {
      return axios.post('/users/updateEmail', params)
    })
}

function bulkUpdate (eventObject) {
  return validate(Schema.bulkUpdate, eventObject)
    .then(function (params) {
      return axios.post('/users/bulkUpdate', params)
    })
}
