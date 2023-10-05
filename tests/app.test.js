const app = require('../app.js')
const request = require('supertest')

// it('Testing to see if supertest works', () => {
//     expect(1).toBe(2)
// })

describe("Test the '/' path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/")
        .then(response => {
          expect(response.text).toBe('Hello, world!');
        })
    })
  })

  describe("Test the '/' path", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/")
        .then(response => {
          expect(response.statusCode).toBe(418)
        })
    })
  })