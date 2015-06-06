'use strict';

angular.module('message.flash')

  .factory('MessageFlashFactory', function ($rootScope, MessageFlashConstants) {
    var messageFlash = {};
    var message = '';

    messageFlash.getMessage = function () {
      return message;
    };

    messageFlash.setMessage = function (newMessage) {
      message = newMessage;
      $rootScope.$broadcast(MessageFlashConstants.NEW_MESSAGE);
    };

    return messageFlash;
  });
