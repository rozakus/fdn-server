const bcrypt = require('bcryptjs')

function hashPassword(input) {
  let salt = bcrypt.genSaltSync(10)
  let hashedPassword = bcrypt.hashSync(input, salt)

  return hashedPassword
}

function isPasswordValid(inputPassword, dbPassword) {
  return bcrypt.compareSync(inputPassword, dbPassword)
}

module.exports = {
  hashPassword, isPasswordValid
}