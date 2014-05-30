define("ghost/components/gh-markdown", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var Markdown = Ember.Component.extend({
        adjustScrollPosition: function () {
            var scrollWrapper = this.$().closest('.entry-preview-content').get(0),
            // calculate absolute scroll position from percentage
                scrollPixel = scrollWrapper.scrollHeight * this.get('scrollPosition');

            scrollWrapper.scrollTop = scrollPixel; // adjust scroll position
        }.observes('scrollPosition')
    });

    __exports__["default"] = Markdown;
  });