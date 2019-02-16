const routes = require('next-routes')();

routes.add('/','index');
routes.add('/auth', 'auth');
routes.add('/newreciever', 'dashboardReciever');
routes.add('/newlivedonor', 'dashboardLiveDonor');
routes.add('/newdeaddonor', 'dashboardDeadDonor');

module.exports = routes;