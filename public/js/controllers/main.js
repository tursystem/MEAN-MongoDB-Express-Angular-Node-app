"use strict";
var imController = angular.module('imController', []);

    imController.controller('sellController', function($scope, $http, Ims) {
        $scope.formData = {};

        Ims.getObjects()
            .success(function(data) {
                $scope.ims = data;
            });

        $scope.createIm = function() {
            if (!$.isEmptyObject($scope.formData)) {

                Ims.createObject($scope.formData)

                    .success(function(data) {
                        $scope.formData = {};
                        $scope.ims = data;
                    });
            }
        };

        $scope.deleteIm = function(id) {
            Ims.deleteObject(id)
                .success(function(data) {
                    $scope.ims = data;
                });
        };
    });

    imController.controller('subscribeController', function($scope, $http, Ims) {
        $scope.formData = {};

        $scope.subscribe = function(isValid) {
            if(isValid) {
                Ims.subscribe($scope.formData)
                    .success(function(data) {
                        $scope.formData = {};
                        $scope.subscription = data;
                    });
            }
        };

        $scope.unsubscribe = function(id) {
            Ims.unsubscribe(id)
                .success(function(data) {
                    $scope.subscription = data;
                });
        };
    });