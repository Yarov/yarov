define("ghost/components/gh-activating-list-item", 
  ["exports"],
  function(__exports__) {
    "use strict";
    __exports__["default"] = Ember.Component.extend({
        tagName: 'li',
        classNameBindings: ['active'],
        active: false
    });
  });