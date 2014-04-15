'use strict';
var Immobilien = angular.module('Immobilien', [
    'ngRoute',
    'imController',
    'imService'
]);

Immobilien.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/index', {
                templateUrl: 'partials/index.html',
                controller: 'mainController'
            }).
            when('/sell', {
                templateUrl: 'partials/sell.html',
                controller: 'sellController'
            }).
            when('/buy', {
                templateUrl: 'partials/buy.html',
                controller: 'buyCtrl'
            }).
            when('/subscribe', {
                templateUrl: 'partials/agency_subscribe.html',
                controller: 'subscribeController'
            }).
            otherwise({
                redirectTo: '/index'
            });
    }]);