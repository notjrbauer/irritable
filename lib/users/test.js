var test = require('blue-tape')
var IrritableClient = require('../')
var token = process.env.ITERABLE_TOKEN

var Irritable = IrritableClient({
  token: token
})

var fixture = {
  user: {
    email: 'test@test.com',
    dataFields: {},
    userId: '123'
  }
}

test('Users', function (t) {
  t.test('remove', () => {
    return Irritable.Commerce.trackPurchase(fixture)
      .then(t.ok)
  })

  t.test('remove - invalid input', () => {
    return Irritable.Commerce.trackPurchase({
      eventName: 'test',
      email: 'testnotvalid'
    }).catch(t.ok)
  })
})

