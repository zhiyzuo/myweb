"use strict";

var app = angular.module('MyWeb', [
    'ngRoute',
    'MyWebControllers',
    'MyWebServices'
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/main.html',
      }).
      when('/cities/:city', {
        templateUrl: 'partials/city-detail.html',
      }).
      otherwise({
        redirectTo: '/#'
      });
  }]);



