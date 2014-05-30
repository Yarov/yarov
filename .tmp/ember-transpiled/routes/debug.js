define("ghost/routes/debug", 
  ["ghost/mixins/style-body","ghost/models/settings","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var styleBody = __dependency1__["default"];
    var SettingsModel = __dependency2__["default"];

    var settingsModel = SettingsModel.create();

    var DebugRoute = Ember.Route.extend(styleBody, {
        classNames: ['settings'],
        model: function () {
            return settingsModel;
        }
    });

    __exports__["default"] = DebugRoute;
  });