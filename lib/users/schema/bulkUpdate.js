var validator = require('is-my-json-valid')
var apiUser = require('./apiUser')

module.exports = validator({
  required: true,
  type: 'object',
  properties: {
    users: {
      type: 'array',
      ref: '#apiUser',
      required: true
    }
  },
  additionalProperities: false
}, {
  schemas: {
    apiUser: apiUser
  }
})
