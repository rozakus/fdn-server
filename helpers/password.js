const bcrypt = require('bcryptjs')

function hashPassword(input) {
  let salt = bcrypt.genSaltSync(10)
  let hashedPassword = bcrypt.hashSync(input, salt)

  return hashedPassword
}

function isPasswordValid(dbPassword, inputPassword) {
  bcrypt.compareSync(dbPassword, inputPassword)
}

module.exports = {
  hashPassword, isPasswordValid
}