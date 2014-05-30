define("ghost/initializers/notifications", 
  ["ghost/utils/notifications","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Notifications = __dependency1__["default"];

    __exports__["default"] = {
        name: 'injectNotifications',

        initialize: function (container, application) {
            application.register('notifications:main', Notifications);

            application.inject('controller', 'notifications', 'notifications:main');
            application.inject('component', 'notifications', 'notifications:main');
            application.inject('route', 'notifications', 'notifications:main');
        }
    };
  });