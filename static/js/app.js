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
        templateUrl: 'static/partials/main.html',
      }).
      otherwise({
        redirectTo: '/#'
      });
  }]);



