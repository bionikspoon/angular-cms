'use strict';

angular.module('message.flash')

  .factory('MessageFlashFactory', function ($rootScope) {
    var messageFlash = {};
    var message = '';

    messageFlash.getMessage = function () {
      return message;
    };

    messageFlash.setMessage = function (newMessage) {
      message = newMessage;
      $rootScope.$broadcast('NEW_MESSAGE');
    };

    return messageFlash;
  });
