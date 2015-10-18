'use strict';

angular.module('ppApp')
  .controller('PostCtrl', function ($scope, $http) {
    $scope.posts = [];

    $http.get('/api/posts').success(function(posts) {
      $scope.posts = posts;
    });

    console.log(form);

  	$scope.addPost = function(form){
  		//$scope.post = form;
  		

  		//$scope.post = 'post';
      $http.post('/api/posts', { title: $scope.form });
  	};
  });
