'use strict';

angular.module('ppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('newPost', {
        url: '/write',
        templateUrl: 'app/post/write.html',
        controller: 'PostCtrl'
      })
      .state('editPost', {
        url: '/edit/:postId',
        templateUrl: 'app/post/write.html',
        controller: 'PostCtrl'
      })
      .state('showPost', {
        url: '/post/:postId',
        templateUrl: 'app/post/post.html',
        controller: 'PostCtrl'
      });
  });