// DEPENDENCIES
const app = require("../app.js");
const request = require("supertest");

// it('Testing to see if supertest works', ()=> {
//   expect(1).toBe(1)
// })

describe("Test the root path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});


  test("It should response the GET method", () => {
    return request(app)
      .get("/")
      .then((response) => {
        expect(response.statusCode).toBe(418);
      });
  });


  test("It should return `I'll be back` ", () => {
    return request(app)
      .get("/terminator")
      .then((response) => {
        expect(response.text).toBe("I'll be back");
      });
  });