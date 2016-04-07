module.exports = {
  csv: csv,
  json: json
}
var Schema = require('./schema')
var axios = require('axios')

function _validate(validator, eventObject) {
  validator(eventObject)

  if (validator.errors) {
    return Promise.reject(new Error(JSON.stringify(validator.errors)))
  }
  return eventObject
}

function csv(eventObject) {
  eventObject = _validate(Schema.csv, eventObject)
  return axios.get('/export/data.csv', eventObject)
}

function json(eventObject) {
  eventObject = _validate(Schema.json, eventObject)
  return axios.get('/export/data.json', eventObject)
}
