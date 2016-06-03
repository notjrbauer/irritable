var validator = require('is-my-json-valid')

var range = require('./range')
var dataTypeName = require('./dataTypeName')

module.exports = validator({
  required: true,
  type: 'object',
  properties: {
    dataTypeName: {
      type: 'string',
      ref: '#dataTypeName',
      required: true
    },
    range: {
      type: 'string',
      ref: '#range',
      required: true
    },
    delimiter: {
      type: 'string',
      required: true
    },
    startDateTime: {
      type: 'string',
      required: true
    },
    endDateTime: {
      type: 'string',
      required: true
    },
    omitFields: {
      type: 'string',
      required: true
    },
    onlyFields: {
      type: 'array',
      items: { type: 'string' },
      required: false
    },
    campaignId: {
      type: 'number',
      required: false
    }
  },
  additionalProperities: false,
  schemas: {
    dataTypeName: dataTypeName,
    range: range
  }
})
