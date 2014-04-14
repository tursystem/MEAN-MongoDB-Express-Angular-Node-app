"use strict";
var imController = angular.module('imController', []);

    imController.controller('mainController', function($scope, $http, Ims) {
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

    imController.controller('subscribeController', function($scope, $http, Subscription) {
        $scope.formData = {};

        $scope.subscribe = function() {
            if (!$.isEmptyObject($scope.formData)) {

                Subscription.create($scope.formData)
                    .success(function(data) {
                        $scope.formData = {};
                        $scope.subscription = data;
                    });
            }
        };

        $scope.unsubscribe = function(id) {
            Subscription.delete(id)
                .success(function(data) {
                    $scope.subscription = data;
                });
        };
    });