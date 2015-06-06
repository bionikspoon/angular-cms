'use strict';

angular.module('AngularCMSApp')

  .factory('PagesFactory', function ($http, $log) {
    var baseUrl = '/api/pages/';
    var pagesFactory = {};

    pagesFactory.pages = [];

    pagesFactory.getPage = function (id) {
      return $http.get(baseUrl + id);
    };

    pagesFactory.getPages = function () {
      return $http.get(baseUrl);
    };

    pagesFactory.savePage = function (pageData) {
      var id = pageData._id;

      if (id === '0') {
        return $http.post(baseUrl, pageData);
      } else {
        return $http.put(baseUrl + id, pageData);
      }
    };

    pagesFactory.deletePage = function (id) {
      return $http.delete(baseUrl + id);
    };

    return pagesFactory;
  });
