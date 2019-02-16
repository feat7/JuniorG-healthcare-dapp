const routes = require('next-routes')();

routes.add('/','index');
routes.add('/auth', 'auth');

module.exports = routes;