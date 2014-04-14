"use strict";
var imService = angular.module('imService', []);

    imService.factory('Ims', function($http) {
        return {
            get : function() {
                return $http.get('/api/ims');
            },
            create : function(imData) {
                return $http.post('/api/ims', imData);
            },
            delete : function(id) {
                return $http.delete('/api/ims/' + id);
            }
        };
    });

    imService.factory('Subscription', function($http) {
        return {
            subscribe : function(data) {
                return $http.post('/api/subscribe', data);
            },
            unsubscribe : function(id) {
                return $http.delete('/api/unsubscribe/' + id);
            }
        };
    });