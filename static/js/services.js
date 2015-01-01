"use strict";

var services = angular.module('MyWebServices', ['ngResource']);

services.factory('JumbotronService', ['$resource',
  function($resource){
    return $resource('static/json/jumbotron.json', {}, {
      query: {method:'GET', isArray:false}
    });
  }]);

services.factory('SocialMediaService', ['$resource',
  function($resource){
    return $resource('static/json/:socialMediaID.json', {}, {
      queryAll: {method:'GET', params:{socialMediaID:'socials'}, isArray:true}
    });
  }]);

services.factory('CityService', ['$resource',
  function($resource){
    return $resource('static/json/:cityID.json', {}, {
      queryAll: {method:'GET', params:{cityID:'cities'}, isArray:true},
    });
  }]);

services.factory('ContactService', ['$http',
    //TODO: add http service here
  ]);

services.factory('AboutService', ['$resource',
  function($resource){
    return $resource('static/json/abouts.json', {}, {
      queryAll: {method:'GET', isArray:true},
    });
  }]);
