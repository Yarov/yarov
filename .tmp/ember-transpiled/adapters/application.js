define("ghost/adapters/application", 
  ["ghost/utils/ghost-paths","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var ghostPaths = __dependency1__["default"];

    // export default DS.FixtureAdapter.extend({});

    __exports__["default"] = DS.RESTAdapter.extend({
        host: window.location.origin,
        namespace: ghostPaths().apiRoot.slice(1),
        headers: {
            'X-CSRF-Token': $('meta[name="csrf-param"]').attr('content')
        },

        buildURL: function (type, id) {
            // Ensure trailing slashes
            var url = this._super(type, id);

            if (url.slice(-1) !== '/') {
                url += '/';
            }

            return url;
        }
    });
  });