const request = require('supertest')
const app = require('../app')

describe('GET /order', () => {
  it('Status Code 200', (done) => {
    request(app)
      .get('/order')
      .end((err, res) => {
        if (err) done(err)

        expect(res.statusCode).toEqual(200)

        done()
      })
  })
})

describe('GET /pivot', () => {
  it('Status Code 200', (done) => {
    request(app)
      .get('/pivot')
      .end((err, res) => {
        if (err) done(err)

        expect(res.statusCode).toEqual(200)

        done()
      })
  })
})