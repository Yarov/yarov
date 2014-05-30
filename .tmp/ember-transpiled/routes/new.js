define("ghost/routes/new", 
  ["ghost/routes/authenticated","ghost/mixins/style-body","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var AuthenticatedRoute = __dependency1__["default"];
    var styleBody = __dependency2__["default"];

    var NewRoute = AuthenticatedRoute.extend(styleBody, {
        controllerName: 'posts.post',
        classNames: ['editor'],

        renderTemplate: function () {
            this.render('editor');
        },

        model: function () {
            return this.store.createRecord('post', {
                title: 'New Post'
            });
        }
    });

    __exports__["default"] = NewRoute;
  });