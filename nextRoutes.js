const routes = require('next-routes')();

routes.add('/','index');
routes.add('/auth', 'auth');
routes.add('/patients', 'patitents');
routes.add('/livedoners', 'livedoners');
routes.add('/deaddoners', 'deaddoners');
routes.add('/newreciever', 'addreciever');
routes.add('/newlivedonor', 'addlivedonor');
routes.add('/newdeaddonor', 'adddeaddonor');
routes.add('/approveddeaddonor', 'approvedeaddonor');
routes.add('/approvelivedonor', 'approvelivedonor');

module.exports = routes;