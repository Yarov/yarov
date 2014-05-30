define("ghost/views/post-settings-menu-view", 
  ["ghost/utils/date-formatting","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    /* global moment */
    var formatDate = __dependency1__.formatDate;

    var PostSettingsMenuView = Ember.View.extend({
        templateName: 'post-settings-menu',
        classNames: ['post-settings-menu', 'menu-drop-right', 'overlay'],
        classNameBindings: ['controller.isEditingSettings::hidden'],
        publishedAtBinding: Ember.Binding.oneWay('controller.publishedAt'),
        click: function (event) {
            //Stop click propagation to prevent window closing
            event.stopPropagation();
        },
        datePlaceholder: function () {
            return formatDate(moment());
        }.property('controller.publishedAt')
    });

    __exports__["default"] = PostSettingsMenuView;
  });