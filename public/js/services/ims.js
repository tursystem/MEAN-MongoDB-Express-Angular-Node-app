"use strict";
angular.module('imService', [])
    .factory('Ims', function($http) {
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