const app = require('../app.js')
const request = require('supertest')

// it('Testing to see how this supertest works', () => {
//   expect(1).toBe(2)
// });

describe('Test the root path', () => {
  test('responce should be GET method', () => {
    return request(app)
    .get('/')
    .then(response => {
      expect(response.statusCode).toBe(200)
    })
  })
})