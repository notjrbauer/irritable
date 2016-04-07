var validator = require('is-my-json-valid')

var enums = [
  'emailSend',
  'emailOpen',
  'emailClick',
  'emailUnSubscribe',
  'emailSubscribe',
  'emailBounce',
  'emailComplaint',
  'emailConvert',
  'pushSend',
  'pushBounce',
  'pushOpen',
  'smsSend',
  'smsBounce',
  'smsReceived',
  'purchase',
  'customEvent',
  'user'
]

module.exports = validator({
  required: true,
  type: 'string',
  enum: enums
})
