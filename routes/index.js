const auth = require('./auth')
const post = require('./post')

module.exports = (app) => {
    auth(app)
    post(app)
}