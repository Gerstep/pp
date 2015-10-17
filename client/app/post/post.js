'use strict';

angular.module('ppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('post', {
        url: '/write',
        templateUrl: 'app/post/write.html',
        controller: 'PostCtrl'
      });
  });