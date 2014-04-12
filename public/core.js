"use strict";
var Immobilien = angular.module('Immobilien', []);

function imController($scope, $http) {
	$scope.formData = {};

	$http.get('/api/ims')
		.success(function(data) {
			$scope.ims = data;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

	$scope.createIm = function() {
		$http.post('/api/ims', $scope.formData)
			.success(function(data) {
				$('input').val('');
				$scope.ims = data;
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

	$scope.deleteIm = function(id) {
		$http.delete('/api/ims/' + id)
			.success(function(data) {
				$scope.ims = data;
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

}