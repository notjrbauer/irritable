var validator = require('is-my-json-valid')

module.exports = validator({
  required: true,
  type: 'object',
  properties: {
    user: {
      type: 'object',
      format: 'email',
      required: true
    }
  },
  additionalProperities: false
})

