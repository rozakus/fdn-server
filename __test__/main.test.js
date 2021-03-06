const request = require('supertest')
const app = require('../app')

describe('GET /orders', () => {
  it('Status Code 200', (done) => {
    request(app)
      .get('/orders')
      .end((err, res) => {
        if (err) done(err)

        expect(res.statusCode).toEqual(200)
        expect(res.body).toEqual([
          {
            "id": 1,
            "UserId": 2,
            "ProductId": 1,
            "quantity": 1,
            "total_price": 110000,
            "User": {
              "id": 2,
              "firstname": "user01",
              "lastname": "last",
              "email": "user01@hotmail.com",
              "role": "user"
            },
            "Product": {
              "id": 1,
              "item": "Skincare",
              "price": 110000
            }
          },
          {
            "id": 2,
            "UserId": 2,
            "ProductId": 5,
            "quantity": 2,
            "total_price": 300000,
            "User": {
              "id": 2,
              "firstname": "user01",
              "lastname": "last",
              "email": "user01@hotmail.com",
              "role": "user"
            },
            "Product": {
              "id": 5,
              "item": "Foundation",
              "price": 150000
            }
          },
          {
            "id": 3,
            "UserId": 2,
            "ProductId": 10,
            "quantity": 5,
            "total_price": 1000000,
            "User": {
              "id": 2,
              "firstname": "user01",
              "lastname": "last",
              "email": "user01@hotmail.com",
              "role": "user"
            },
            "Product": {
              "id": 10,
              "item": "Fragrance",
              "price": 200000
            }
          },
          {
            "id": 4,
            "UserId": 5,
            "ProductId": 2,
            "quantity": 1,
            "total_price": 120000,
            "User": {
              "id": 5,
              "firstname": "user04",
              "lastname": "last",
              "email": "user04@hotmail.com",
              "role": "user"
            },
            "Product": {
              "id": 2,
              "item": "Body Lotion",
              "price": 120000
            }
          },
          {
            "id": 5,
            "UserId": 5,
            "ProductId": 3,
            "quantity": 2,
            "total_price": 260000,
            "User": {
              "id": 5,
              "firstname": "user04",
              "lastname": "last",
              "email": "user04@hotmail.com",
              "role": "user"
            },
            "Product": {
              "id": 3,
              "item": "Shampoo",
              "price": 130000
            }
          },
          {
            "id": 6,
            "UserId": 5,
            "ProductId": 3,
            "quantity": 4,
            "total_price": 420000,
            "User": {
              "id": 5,
              "firstname": "user04",
              "lastname": "last",
              "email": "user04@hotmail.com",
              "role": "user"
            },
            "Product": {
              "id": 3,
              "item": "Shampoo",
              "price": 130000
            }
          },
          {
            "id": 7,
            "UserId": 7,
            "ProductId": 3,
            "quantity": 5,
            "total_price": 650000,
            "User": {
              "id": 7,
              "firstname": "user06",
              "lastname": "last",
              "email": "user06@hotmail.com",
              "role": "user"
            },
            "Product": {
              "id": 3,
              "item": "Shampoo",
              "price": 130000
            }
          },
          {
            "id": 8,
            "UserId": 7,
            "ProductId": 4,
            "quantity": 2,
            "total_price": 280000,
            "User": {
              "id": 7,
              "firstname": "user06",
              "lastname": "last",
              "email": "user06@hotmail.com",
              "role": "user"
            },
            "Product": {
              "id": 4,
              "item": "Sun Block",
              "price": 140000
            }
          },
          {
            "id": 9,
            "UserId": 7,
            "ProductId": 5,
            "quantity": 2,
            "total_price": 300000,
            "User": {
              "id": 7,
              "firstname": "user06",
              "lastname": "last",
              "email": "user06@hotmail.com",
              "role": "user"
            },
            "Product": {
              "id": 5,
              "item": "Foundation",
              "price": 150000
            }
          },
          {
            "id": 10,
            "UserId": 7,
            "ProductId": 6,
            "quantity": 3,
            "total_price": 480000,
            "User": {
              "id": 7,
              "firstname": "user06",
              "lastname": "last",
              "email": "user06@hotmail.com",
              "role": "user"
            },
            "Product": {
              "id": 6,
              "item": "Night Cream",
              "price": 160000
            }
          }
        ])

        done()
      })
  })
})

describe('GET /pivots', () => {
  it('Status Code 200', (done) => {
    request(app)
      .get('/pivots')
      .end((err, res) => {
        if (err) done(err)

        expect(res.statusCode).toEqual(200)
        expect(res.body).toEqual([
          {
            "id": 2,
            "firstname": "user01",
            "lastname": "last",
            "email": "user01@hotmail.com",
            "role": "user",
            "Products": [
              {
                "id": 1,
                "item": "Skincare",
                "price": 110000,
                "totalQuantity": 1,
                "totalPrice": 110000
              },
              {
                "id": 2,
                "item": "Body Lotion",
                "price": 120000,
                "totalQuantity": 0,
                "totalPrice": 0
              },
              {
                "id": 3,
                "item": "Shampoo",
                "price": 130000,
                "totalQuantity": 0,
                "totalPrice": 0
              },
              {
                "id": 4,
                "item": "Sun Block",
                "price": 140000,
                "totalQuantity": 0,
                "totalPrice": 0
              },
              {
                "id": 5,
                "item": "Foundation",
                "price": 150000,
                "totalQuantity": 2,
                "totalPrice": 300000
              },
              {
                "id": 6,
                "item": "Night Cream",
                "price": 160000,
                "totalQuantity": 0,
                "totalPrice": 0
              },
              {
                "id": 7,
                "item": "Day Cream",
                "price": 170000,
                "totalQuantity": 0,
                "totalPrice": 0
              },
              {
                "id": 8,
                "item": "Toner",
                "price": 180000,
                "totalQuantity": 0,
                "totalPrice": 0
              },
              {
                "id": 9,
                "item": "Lip Balm",
                "price": 190000,
                "totalQuantity": 0,
                "totalPrice": 0
              },
              {
                "id": 10,
                "item": "Fragrance",
                "price": 200000,
                "totalQuantity": 5,
                "totalPrice": 1000000
              }
            ]
          },
          {
            "id": 5,
            "firstname": "user04",
            "lastname": "last",
            "email": "user04@hotmail.com",
            "role": "user",
            "Products": [
              {
                "id": 1,
                "item": "Skincare",
                "price": 110000,
                "totalQuantity": 0,
                "totalPrice": 0
              },
              {
                "id": 2,
                "item": "Body Lotion",
                "price": 120000,
                "totalQuantity": 1,
                "totalPrice": 120000
              },
              {
                "id": 3,
                "item": "Shampoo",
                "price": 130000,
                "totalQuantity": 6,
                "totalPrice": 680000
              },
              {
                "id": 4,
                "item": "Sun Block",
                "price": 140000,
                "totalQuantity": 0,
                "totalPrice": 0
              },
              {
                "id": 5,
                "item": "Foundation",
                "price": 150000,
                "totalQuantity": 0,
                "totalPrice": 0
              },
              {
                "id": 6,
                "item": "Night Cream",
                "price": 160000,
                "totalQuantity": 0,
                "totalPrice": 0
              },
              {
                "id": 7,
                "item": "Day Cream",
                "price": 170000,
                "totalQuantity": 0,
                "totalPrice": 0
              },
              {
                "id": 8,
                "item": "Toner",
                "price": 180000,
                "totalQuantity": 0,
                "totalPrice": 0
              },
              {
                "id": 9,
                "item": "Lip Balm",
                "price": 190000,
                "totalQuantity": 0,
                "totalPrice": 0
              },
              {
                "id": 10,
                "item": "Fragrance",
                "price": 200000,
                "totalQuantity": 0,
                "totalPrice": 0
              }
            ]
          },
          {
            "id": 7,
            "firstname": "user06",
            "lastname": "last",
            "email": "user06@hotmail.com",
            "role": "user",
            "Products": [
              {
                "id": 1,
                "item": "Skincare",
                "price": 110000,
                "totalQuantity": 0,
                "totalPrice": 0
              },
              {
                "id": 2,
                "item": "Body Lotion",
                "price": 120000,
                "totalQuantity": 0,
                "totalPrice": 0
              },
              {
                "id": 3,
                "item": "Shampoo",
                "price": 130000,
                "totalQuantity": 5,
                "totalPrice": 650000
              },
              {
                "id": 4,
                "item": "Sun Block",
                "price": 140000,
                "totalQuantity": 2,
                "totalPrice": 280000
              },
              {
                "id": 5,
                "item": "Foundation",
                "price": 150000,
                "totalQuantity": 2,
                "totalPrice": 300000
              },
              {
                "id": 6,
                "item": "Night Cream",
                "price": 160000,
                "totalQuantity": 3,
                "totalPrice": 480000
              },
              {
                "id": 7,
                "item": "Day Cream",
                "price": 170000,
                "totalQuantity": 0,
                "totalPrice": 0
              },
              {
                "id": 8,
                "item": "Toner",
                "price": 180000,
                "totalQuantity": 0,
                "totalPrice": 0
              },
              {
                "id": 9,
                "item": "Lip Balm",
                "price": 190000,
                "totalQuantity": 0,
                "totalPrice": 0
              },
              {
                "id": 10,
                "item": "Fragrance",
                "price": 200000,
                "totalQuantity": 0,
                "totalPrice": 0
              }
            ]
          }
        ])

        done()
      })
  })
})