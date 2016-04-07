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
    workflowId: {
      type: 'number',
      required: true
    },
    dataFields: {
      type: 'object',
      required: false
    },
    listId: {
      type: 'object',
      required: false
    }
  },
  additionalProperities: false
})
