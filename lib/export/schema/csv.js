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
      required: false
    },
    delimiter: {
      type: 'string',
      required: false
    },
    startDateTime: {
      type: 'string',
      required: false
    },
    endDateTime: {
      type: 'string',
      required: false
    },
    omitFields: {
      type: 'string',
      required: false
    },
    onlyFields: {
      type: 'array',
      items: { type: 'string'},
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
