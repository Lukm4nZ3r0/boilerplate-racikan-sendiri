const auth = require('./auth')
const post = require('./post')
const user = require('./user')

module.exports = (app) => {
    auth(app)
    post(app)
    user(app)
}