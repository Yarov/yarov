define("ghost/routes/posts/index", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var PostsIndexRoute = Ember.Route.extend({
        // redirect to first post subroute
        redirect: function () {
            var firstPost = (this.modelFor('posts') || []).get('firstObject');

            if (firstPost) {
                this.transitionTo('posts.post', firstPost);
            }
        }
    });

    __exports__["default"] = PostsIndexRoute;
  });