var Schema = require('./schema')
var axios = require('axios')

module.exports = {
  csv: csv,
  json: json
}

function validate (validator, eventObject) {
  validator(eventObject)

  if (validator.errors) {
    return Promise.reject(new Error(JSON.stringify(validator.errors)))
  }
  return Promise.resolve(eventObject)
}

function csv (eventObject) {
  return validate(Schema.csv, eventObject)
    .then(function (params) {
      return axios.get('/export/data.csv', {
        params: params
      })
    })
}

function json (eventObject) {
  return validate(Schema.csv, eventObject)
    .then(function (params) {
      return axios.get('/export/data.json', {
        params: params
      })
    })
}
