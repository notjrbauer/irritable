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
  },
  items: [{
    id: '1',
    name: 'item #1',
    description: 'description for item #1',
    price: 100,
    quantity: 1
  }],
  total: 100
}

test('Commerece', function (t) {
  t.test('trackPurchase', () => {
    return Irritable.Commerce.trackPurchase(fixture)
      .then(t.ok)
  })

  t.test('trackPurchase - invalid input', () => {
    return Irritable.Commerce.trackPurchase({
      eventName: 'test',
      email: 'testnotvalid'
    }).catch(t.ok)
  })

  t.test('updateCart', () => {
    delete fixture.total
    return Irritable.Commerce.updateCart(fixture)
      .then(t.ok)
  })

  t.test('updateCart - invalid input', () => {
    return Irritable.Commerce.trackPurchase({
      eventName: 'test',
      email: 'testnotvalid'
    }).catch(t.ok)
  })
})
