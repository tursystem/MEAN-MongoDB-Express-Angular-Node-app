"use strict";
var imService = angular.module('imService', []);

    imService.factory('Ims', function($http) {
        return {
            getObjects : function() {
                return $http.get('/api/ims');
            },
            createObject : function(imData) {
                return $http.post('/api/ims', imData);
            },
            deleteObject : function(id) {
                return $http.delete('/api/ims/' + id);
            },
            subscribe : function(data) {
                return $http.post('/api/subscribe', data);
            },
            unsubscribe : function(id) {
                return $http.delete('/api/unsubscribe/' + id);
            }
        };
    });