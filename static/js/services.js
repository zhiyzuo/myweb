"use strict";

var services = angular.module('MyWebServices', ['ngResource']);

services.factory('SocialMediaService', ['$resource',
    function($resource){
        return $resource('json/:mediaName.json', {}, {
            query: {method:'GET', params:{mediaName:'socialMedias'},
        isArray:true}    
        });
  }]);
