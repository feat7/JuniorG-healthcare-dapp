const routes = require('next-routes')();

routes
    .add('/','index')
    .add('/login','login');

module.exports = routes;