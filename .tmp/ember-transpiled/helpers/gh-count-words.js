define("ghost/helpers/gh-count-words", 
  ["ghost/utils/word-count","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var count = __dependency1__["default"];

    var countWords = Ember.Handlebars.makeBoundHelper(function (markdown) {
        return count(markdown || '');
    });

    __exports__["default"] = countWords;
  });