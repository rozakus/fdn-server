const { Order, User, Product } = require('../models')

class MainController {
  static async allProduct(req, res) {
    try {

      const products = await Product.findAll({
        order: [['id']],
        attributes: { exclude: ['createdAt', 'updatedAt'] },
      })

      return res.status(200).json(products)

    } catch (err) {
      return res.status(500).json(err)
    }
  }

  static async orderUser(req, res) {
    try {

      const orders = await Order.findAll({
        order: [['id']],
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        include: [
          {
            model: User,
            attributes: { exclude: ['createdAt', 'updatedAt', 'password'] }
          },
          {
            model: Product,
            attributes: { exclude: ['createdAt', 'updatedAt'] }
          }
        ]
      })

      return res.status(200).json(orders)

    } catch (err) {
      return res.status(500).json(err)
    }
  }

  static async pivot(req, res) {
    try {

      const products = await Product.findAll({
        order: [['id']],
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        include: {
          model: Order,
          attributes: { exclude: ['createdAt', 'updatedAt'] }
        }
      })

      const users = await User.findAll({
        order: [['id']],
        attributes: { exclude: ['createdAt', 'updatedAt', 'password'] },
        include: [{
          model: Order,
          attributes: { exclude: ['createdAt', 'updatedAt'] }
        }]
      })

      const totals = users.filter(user => user.Orders.length !== 0)
      const addedTotals = totals.map(total => {
        return {
          id: total.id,
          firstname: total.firstname,
          lastname: total.lastname,
          email: total.email,
          role: total.role,
          Products: products.map(product => {

            let totalQuantity = 0
            let totalPrice = 0

            total.Orders.map(order => {
              if (order.id === product.id) {
                totalQuantity += order.quantity
                totalPrice += order.total_price
              }
            })

            return {
              id: product.id,
              item: product.item,
              price: product.price,
              totalQuantity: totalQuantity,
              totalPrice: totalPrice,
            }
          })
        }
      })

      return res.status(200).json(addedTotals)

    } catch (err) {
      return res.status(500).json(err)
    }
  }
}

module.exports = MainController