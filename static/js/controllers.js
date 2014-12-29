"use strict";

var controllers = angular.module('MyWebControllers', []);

controllers.controller('MainController', ['$scope', 'CityService', 'SocialMediaService', 
    function($scope, CityService, SocialMediaService) {
        $scope.socialMedias = SocialMediaService.queryAll();
        $scope.cities = CityService.queryAll();
        $scope.cityAge = "start";
}]); 
