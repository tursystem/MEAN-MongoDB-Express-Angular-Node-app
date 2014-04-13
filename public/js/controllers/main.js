"use strict";
angular.module('imController', [])

    .controller('immobilienController', function($scope, $http, Ims) {
        $scope.formData = {};

        Ims.get()
            .success(function(data) {
                $scope.ims = data;
            });

        $scope.createIm = function() {
            if (!$.isEmptyObject($scope.formData)) {

                Ims.create($scope.formData)

                    .success(function(data) {
                        $scope.formData = {};
                        $scope.ims = data;
                    });
            }
        };

        $scope.deleteIm = function(id) {
            Ims.delete(id)
                .success(function(data) {
                    $scope.ims = data;
                });
        };
    });