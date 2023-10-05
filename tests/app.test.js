const supertest = require('supertest')
const app = require('../app.js')

// it('Testing to see if Jest works', () => {
//     expect(1).toBe(1)
// });

describe('Test the root path', () => {
    test('It should response the GET method', () => {
        return supertest(app).get("/").then(response => {
            expect(response.statusCode).toBe(200)
        })
    })
})

describe('Test the catchphrase paths', () => {
    test('/terminator should response the GET method', () => {
        return supertest(app).get("/terminator").then(response => {
            expect(response.statusCode).toBe(200)
        })
    })
    test('/SteveMcgarett should response the GET method', () => {
        return supertest(app).get("/SteveMcgarrett").then(response => {
            expect(response.statusCode).toBe(200)
        })
    })
    test('/EthanHunt should response the GET method', () => {
        return supertest(app).get("/EthanHunt").then(response => {
            expect(response.statusCode).toBe(200)
        })
    })
    test('/JamesBond should response the GET method', () => {
        return supertest(app).get("/JamesBond").then(response => {
            expect(response.statusCode).toBe(200)
        })
    })
    test('/JasonBourne should response the GET method', () => {
        return supertest(app).get("/JasonBourne").then(response => {
            expect(response.statusCode).toBe(200)
        })
    })
    test('/JohnWick should response the GET method', () => {
        return supertest(app).get("/JohnWick").then(response => {
            expect(response.statusCode).toBe(200)
        })
    })
    test('/FoxMulder should response the GET method', () => {
        return supertest(app).get("/FoxMulder").then(response => {
            expect(response.statusCode).toBe(200)
        })
    })
})
