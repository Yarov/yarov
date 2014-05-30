define("ghost/utils/ajax", 
  ["exports"],
  function(__exports__) {
    "use strict";
    /* global ic */
    __exports__["default"] = window.ajax = function () {
        return ic.ajax.request.apply(null, arguments);
    };
  });