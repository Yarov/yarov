define("ghost/routes/editor", 
  ["ghost/mixins/style-body","ghost/routes/authenticated","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var styleBody = __dependency1__["default"];
    var AuthenticatedRoute = __dependency2__["default"];

    var EditorRoute = AuthenticatedRoute.extend(styleBody, {
        classNames: ['editor'],
        controllerName: 'posts.post',
        model: function (params) {
            return this.store.find('post', params.post_id);
        }
    });

    __exports__["default"] = EditorRoute;
  });