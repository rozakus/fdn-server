# fdn-server

**HOW TO SETUP SERVER**
```
1. npm i
2. check and configure config/config.json setup postgreSQL username and password
3. npm run db:create
4. npm run db:migrate
5. npm run db:seed

if (error)
6. npm run db:undo
re-run from step 4 or check npx sequelize-cli --help
```

**HOW TO RUN SERVER**
```
1. npm start

server will run at PORT 3000
```

**HOW TO RUN TEST**
```
1. npm test
```

**API**
| Method | Route   | Description                                               |
| ------ | ------- | --------------------------------------------------------- |
| POST   | /login  | Login User                                                |
| GET    | /orders | Get all orders data by user and product                   |
| GET    | /pivots | Get all orders data by user and product using pivot table |

---
### POST /login
---
> Get all orders data by user and product 

_Request Headers_
```
not needed
```

_Request Body_
```
{
    email: "inazrabuu@hotmail.com",
    password: '#Pa55w0rd123#'
}
```

_Response( 200 )_
```
true
```
_Response( 400 )_
```
Password is invalid
```
_Response( 404 )_
```
Email not found
```

_Response ( 500 - Internal Server Error )_
```
"internal server error"
```

---
### GET /orders
---
> Get all orders data by user and product 

_Request Headers_
```
not needed
```

_Request Body_
```
not needed
```

_Response( 200 )_
```
[
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
]
```

_Response ( 500 - Internal Server Error )_
```
"internal server error"
```

---
### GET /pivots
---
> Get all orders data by user and product using pivot table

_Request Headers_
```
not needed
```

_Request Body_
```
not needed
```

_Response( 200 )_
```
[
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
]
```

_Response ( 500 - Internal Server Error )_
```
"internal server error"
```