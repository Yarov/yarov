define("ghost/views/item-view", 
  ["exports"],
  function(__exports__) {
    "use strict";
    __exports__["default"] = Ember.View.extend({
        classNameBindings: ['active'],

        active: function () {
            return this.get('childViews.firstObject.active');
        }.property('childViews.firstObject.active')
    });
  });