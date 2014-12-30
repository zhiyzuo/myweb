"use strict";

var controllers = angular.module('MyWebControllers', []);

controllers.controller('MainController', ['$scope', 'CityService', 'SocialMediaService', 'JumbotronService', 'uiGmapGoogleMapApi',
    function($scope, CityService, SocialMediaService, JumbotronService, uiGmapGoogleMapApi) {
        $scope.jumbotron = JumbotronService.query();
        $scope.socialMedias = SocialMediaService.queryAll();
        $scope.cities = CityService.queryAll();
        $scope.cityAge = "start";

        // toggle city wells 
        $scope.selectCity = function(city) {
            for (var i = 0; i < $scope.cities.length; i++) {
                if ($scope.cities[i].name !== city) {
                    $scope.cities[i].collapsed = false; 
                } else {
                    $scope.cities[i].collapsed = !($scope.cities[i].collapsed); 
                    var latLong = $scope.cities[i].latLong;
                }
            };
            // Google Maps
            $scope.map = { center: { latitude: latLong.latitude, longitude: latLong.longitude}, zoom: 14};
        };

}]); 
