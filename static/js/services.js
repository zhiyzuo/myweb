"use strict";

var services = angular.module('MyWebServices', ['ngResource']);

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
