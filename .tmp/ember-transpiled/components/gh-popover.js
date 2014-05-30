define("ghost/components/gh-popover", 
  ["exports"],
  function(__exports__) {
    "use strict";

    var GhostPopover = Ember.Component.extend({
        classNames: 'ghost-popover',
        classNameBindings: ['open'],
        open: false
    });

    __exports__["default"] = GhostPopover;
  });