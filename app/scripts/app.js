'use strict';

/**
 * @ngdoc overview
 * @name angularStarterApp
 * @description
 * # angularStarterApp
 *
 * Main module of the application.
 */
angular
  .module('angularStarterApp', [
    'ngCookies',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
