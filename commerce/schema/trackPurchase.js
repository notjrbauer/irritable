var validator = require('is-my-json-valid')
var items = require('./items')

module.exports = validator({
  required: true,
  type: 'object',
  properties: {
    user: {
      type: 'object',
      format: 'email',
      required: true
    },
    items: {
      type: 'array',
      $ref: '#items',
      required: true
    },
    total: {
      type: 'number',
      required: true
    },
    campaignId: {
      type: 'number',
      required: false
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
}, {
  schemas: {
    items: items
  }
})
