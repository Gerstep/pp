'use strict';

angular.module('ppApp')
  .controller('UserProfileCtrl', function ($scope, $http, $stateParams, Auth) {
		$http.get('api/users/' + $stateParams.userId)
			.success(function(res) {
        $scope.user = res;
	   });

		$http.get('api/posts/author/' + $stateParams.userId)
			.success(function(res) {
				$scope.posts = res;
			});
  });