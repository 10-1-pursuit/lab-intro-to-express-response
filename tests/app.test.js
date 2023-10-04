const supertest = require('supertest')
const app = require('../app')

//  it('Testing to see if supertest works', ()=> {
//    expect(1).toBe(1)
//  })

describe('Test the /fonzie route', () => {
    test('It should respond with "Ayyy!"', async () => {
        const response = await supertest(app).get('/fonzie');
          expect(response.statusCode).toBe(200);
          expect(response.text).toBe('Ayyy!');
        });
    });
  

  describe('Test the /terminator route', () => {
    test("It should respond with I'll be back", async () => {
        const response = await supertest(app).get('/terminator');
          expect(response.statusCode).toBe(200);
          expect(response.text).toBe("I'll be back");
        });
    });