define("ghost/utils/date-formatting", 
  ["exports"],
  function(__exports__) {
    "use strict";
    /* global moment */
    var parseDateFormats = ["DD MMM YY HH:mm",
                            "DD MMM YYYY HH:mm",
                            "DD/MM/YY HH:mm",
                            "DD/MM/YYYY HH:mm",
                            "DD-MM-YY HH:mm",
                            "DD-MM-YYYY HH:mm",
                            "YYYY-MM-DD HH:mm"],
        displayDateFormat = 'DD MMM YY @ HH:mm';

    //Parses a string to a Moment
    var parseDateString = function (value) {
        return value ? moment(value, parseDateFormats) : '';
    };

    //Formats a Date or Moment
    var formatDate = function (value) {
        return value ? moment(value).format(displayDateFormat) : '';
    };

    __exports__.parseDateString = parseDateString;
    __exports__.formatDate = formatDate;
  });