define("ghost/controllers/modals/upload", 
  ["exports"],
  function(__exports__) {
    "use strict";

    var UploadController = Ember.Controller.extend({
        confirm: {
            reject: {
                func: function () { // The function called on rejection
                    return true;
                },
                buttonClass: true,
                text: "Cancel" // The reject button text
            }
        }
    });

    __exports__["default"] = UploadController;
  });