const test = require('supertest')
const app = require('../app.js')

// it('Testing to see if supertest valid', () => {
//     expect(1).toBe(2)
// })

describe('GET /', () => {
  it('responds with "Hello World"', async () => {
    const response = await test(app).get('/');
    expect(response.text).toBe('Hello World');
    expect(response.status).toBe(200);
  });
});

describe('GET /terminator', () => {
  it('responds with "I\'ll be Back"', async () => {
    const response = await test(app).get('/terminator');
    expect(response.text).toBe('I\'ll be Back');
    expect(response.status).toBe(200);
  });
});

describe('GET /magic8', () => {
  it('responds with a valid magic 8 ball response', async () => {
    const response = await test(app).get('/magic8');
    expect(response.status).toBe(200);
    expect(response.text).toMatch(/<h1>.+<\/h1>/); // Check if the response is in <h1> tags
  });
});

//   describe("Test the '/' path", () => {
//     test("It should response the GET method", () => {
//       return test(app)
//         .get("/")
//         .then(response => {
//           expect(response.statusCode).toBe(418)
//         })
//     })
//   })