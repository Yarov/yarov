define("ghost/routes/posts/post", 
  ["exports"],
  function(__exports__) {
    "use strict";
    __exports__["default"] = Ember.Route.extend({
        model: function (params) {
            return this.store.find('post', params.post_id);
        }
    });
  });