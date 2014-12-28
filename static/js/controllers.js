"use strict";

var controllers = angular.module('MyWebControllers', ['MyWebServices']);


controllers.controller('FooterController', [
    '$scope', 'SocialMediaService', 
    function($scope, SocialMediaService) {   
        $scope.socialMedias = SocialMediaService.query();
}]);
