"use strict";

var services = angular.module('MyWebServices', ['ngResource']);

services.factory('NavService', ['$resource',
  function($resource){
    return $resource('static/json/:navbarID.json', {}, {
      query: {method:'GET', params:{navbarID:'navbar'}, isArray:false},
      query_cn: {method:'GET', params:{navbarID:'navbar_cn'}, isArray:false}
    });
  }]);

services.factory('JumbotronService', ['$resource',
  function($resource){
    return $resource('static/json/:jumbotronID.json', {}, {
      query: {method:'GET', params:{jumbotronID:'jumbotron'}, isArray:false},
      query_cn: {method:'GET', params:{jumbotronID:'jumbotron_cn'}, isArray:false}
    });
  }]);

services.factory('SocialMediaService', ['$resource',
  function($resource){
    return $resource('static/json/:socialMediaID.json', {}, {
      queryAll: {method:'GET', params:{socialMediaID:'socials'}, isArray:true}
    });
  }]);

services.factory('LanguageService', ['$resource',
  function($resource){
    return $resource('static/json/languages.json', {}, {
      queryAll: {method:'GET', isArray:true}
    });
  }]);


services.factory('CityService', ['$resource',
  function($resource){
    return $resource('static/json/:cityID.json', {}, {
      query: {method:'GET', params:{cityID:'cities'}, isArray:true},
      query_cn: {method:'GET', params:{cityID:'cities_cn'}, isArray:true},
    });
  }]);

services.factory('ContactService', ['$resource',
  function($resource){
    return $resource('static/json/:contactID.json', {}, {
      query: {method:'GET', params:{contactID:'contact'}, isArray:false},
      query_cn: {method:'GET', params:{contactID:'contact_cn'}, isArray:false},
    });
  }]);

services.factory('AboutService', ['$resource',
  function($resource){
    return $resource('static/json/:aboutsID.json', {}, {
      query: {method:'GET', params:{aboutsID:'abouts'}, isArray:true},
      query_cn: {method:'GET', params:{aboutsID:'abouts_cn'}, isArray:true},
    });
  }]);
