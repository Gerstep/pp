'use strict';

angular.module('ppApp')
  .controller('PostCtrl', function ($scope, $http, Post) {
  	$scope.addPost = function(){
      $http.post('/api/posts', { title: '$scope.post' });
  	};
  });
