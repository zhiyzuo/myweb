"use strict";

var controllers = angular.module('MyWebControllers', []);

controllers.controller('NavController', ['$scope','$location', function($scope, $location) {

    $scope.goToAbout = function() {
        $location.path("/about"); 
    };
    $scope.goToContact = function() {
        $location.path("/contact"); 
    };
    $scope.goToHome = function() {
        $location.path("/"); 
    };
}]); 

controllers.controller('FooterController', ['$scope', 'SocialMediaService', function($scope, SocialMediaService) {
    $scope.socialMedias = SocialMediaService.queryAll();
}]); 

controllers.controller('MainController', ['$scope', 'CityService', 'JumbotronService', 'uiGmapGoogleMapApi', '$location',
    function($scope, CityService, JumbotronService, uiGmapGoogleMapApi, $location) {
        $scope.jumbotron = JumbotronService.query();
        $scope.cities = CityService.queryAll();
        $scope.cityAge = "start";

        $scope.jumpTo = false;
        // toggle city details
        $scope.selectCity = function(city) {
            for (var i = 0; i < $scope.cities.length; i++) {
                if ($scope.cities[i].name !== city) {
                    $scope.cities[i].collapsed = false; 
                } else {
                    $scope.cities[i].collapsed = !($scope.cities[i].collapsed); 
                    var cityName = $scope.cities[i].name;
                    var latLong = $scope.cities[i].latLong;
                    var marker = $scope.cities[i].marker;
                }
            };
            // Google Maps
            $scope.map = {center: {latitude: latLong.latitude, longitude: latLong.longitude}, zoom: latLong.zoom};
            $scope.options = {scrollwheel: false};
            $scope.marker = {
                id: cityName,
                coords: {
                    latitude: marker.latitude,
                    longitude: marker.longitude
                },
                icon: {url:"../static/icons/university.png"},
                options: { 
                    draggable: false,
                    labelContent: marker.name,
                    labelClass:"googleMapsMarker",
                    labelAnchor: "100 0",
                },
            };
        };
}]); 

controllers.controller('ContactController', ['$scope', '$http', '$modal', function($scope, $http, $modal) {
    $scope.contactForm = {};
    //TODO: Email Typeahead

    $scope.modalWindow = {};

    $scope.send = function() {
	  $http.post('/contact', $scope.contactForm)
		.success(function(data) {

          $scope.modalWindow.title = "Successful!";
          $scope.modalWindow.content = "Thank you for your message! You will receive a confirmation email.";
          $scope.modalWindow.color = {"color":"LightSeaGreen"};
          $scope.modalWindow.button = "btn-primary";

          var modalInstance = $modal.open({
            templateUrl: '../static/partials/sendModal.html',
            controller: 'SendModalController',
            resolve: {
              modalWindow: function () {
                return $scope.modalWindow;
              }
            }
         });
       })
		.error(function(data) {

          $scope.modalWindow.title = "Error!";
          $scope.modalWindow.content = "Please check your input.";
          $scope.modalWindow.color = {"color":"OrangeRed"};
          $scope.modalWindow.button = "btn-warning";

          var modalInstance = $modal.open({
            templateUrl: '../static/partials/sendModal.html',
            controller: 'SendModalController',
            resolve: {
              modalWindow: function () {
                return $scope.modalWindow;
              }
            }
          });

        })
    };

}]); 

controllers.controller('SendModalController', ['$scope', '$modalInstance', 'modalWindow', function($scope, $modalInstance, modalWindow) {
    $scope.modalWindow = modalWindow;
    $scope.ok = function () {
      $modalInstance.close();
    };
}]); 

controllers.controller('AboutController', ['$scope', 'AboutService', function($scope, AboutService) {
    $scope.abouts = AboutService.queryAll();
}]); 
