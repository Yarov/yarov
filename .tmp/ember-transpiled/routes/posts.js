define("ghost/routes/posts", 
  ["ghost/mixins/style-body","ghost/routes/authenticated","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var styleBody = __dependency1__["default"];
    var AuthenticatedRoute = __dependency2__["default"];

    var PostsRoute = AuthenticatedRoute.extend(styleBody, {
        classNames: ['manage'],

        model: function () {
            return this.store.find('post', { status: 'all', staticPages: 'all' });
        },

        actions: {
            openEditor: function (post) {
                this.transitionTo('editor', post);
            }
        }
    });

    __exports__["default"] = PostsRoute;
  });