const routes = require('next-routes')();

routes.add('/','index');
routes.add('/auth', 'auth');
routes.add('/test', 'test');

module.exports = routes;