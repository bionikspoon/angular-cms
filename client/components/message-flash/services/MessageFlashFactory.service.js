'use strict';

angular.module('AngularCMSApp')

  .factory('MessageFlashFactory', function ($rootScope, MessageFlashActions) {
    var messageFlash = {};
    var message = '';

    messageFlash.getMessage = function () {
      return message;
    };

    messageFlash.setMessage = function (newMessage) {
      message = newMessage;
      $rootScope.$broadcast(MessageFlashActions.NEW_MESSAGE);
    };

    return messageFlash;
  });
