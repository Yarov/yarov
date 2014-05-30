define("ghost/routes/authenticated", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var AuthenticatedRoute = Ember.Route.extend({
        beforeModel: function () {
            var user = this.container.lookup('user:current');

            if (!user || !user.get('isSignedIn')) {
                this.notifications.showError('Please sign in');

                this.transitionTo('signin');
            }
        },

        actions: {
            error: function (error) {
                if (error.jqXHR && error.jqXHR.status === 401) {
                    this.transitionTo('signin');
                }
            }
        }
    });

    __exports__["default"] = AuthenticatedRoute;
  });