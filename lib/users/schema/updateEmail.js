var validator = require('is-my-json-valid')

module.exports = validator({
  required: true,
  type: 'object',
  properties: {
    currentEmail: {
      type: 'string',
      format: 'email',
      required: true
    },
    newEmail: {
      type: 'string',
      format: 'email',
      required: true
    }
  },
  additionalProperities: false
})
