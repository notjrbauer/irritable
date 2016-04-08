var validator = require('is-my-json-valid')

module.exports = validator({
  required: true,
  type: 'object',
  properties: {
    email: {
      type: 'string',
      format: 'email',
      required: false
    },
    userId: {
      type: 'string',
      required: false
    },
    campaignId: {
      type: 'number',
      required: true
    },
    templateId: {
      type: 'number',
      required: false
    },
    createdAt: {
      type: 'any',
      required: false
    },
    dataFields: {
      type: 'object',
      required: false
    }
  },
  additionalProperities: false
})
