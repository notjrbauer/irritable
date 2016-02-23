var validator = require('is-my-json-valid')

module.exports = validator({
  required: true,
  type: 'object',
  properties: {
    email: {
      type: 'string',
      format: 'email',
      required: true
    },
    dataFields: {
      type: 'object',
      required: false
    },
    userId: {
      type: 'string',
      required: false
    }
  },
  additionalProperities: false
})
