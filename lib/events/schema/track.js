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
    eventName: {
      type: 'string',
      required: true
    },
    createdAt: {
      type: 'any',
      required: false
    },
    dataFields: {
      type: 'object',
      required: false
    },
    userId: {
      type: 'string',
      required: false
    },
    campaignId: {
      type: 'number',
      required: false
    },
    templateId: {
      type: 'number',
      required: false
    }
  },
  additionalProperities: false
})
