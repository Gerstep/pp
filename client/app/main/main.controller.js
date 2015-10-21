'use strict';

angular.module('ppApp')
  .controller('MainCtrl', function ($scope, $http, Auth) {
    /**
      * Getting current user
    **/

    $scope.currentUser = Auth.getCurrentUser();

    /**
      * Loading list of posts
    **/

    $scope.like = function() {
      $http.post('api/likes/', { 'text' : 'like1'});
    };

    $scope.posts = [];

    $http.get('/api/posts')
      .success(function(posts) {
        $scope.posts = posts;
      });
  });
