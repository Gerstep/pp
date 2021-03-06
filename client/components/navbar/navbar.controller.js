'use strict';

angular.module('ppApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title' : 'Start',
      'link'  : '/'
    }, {
      'title' : 'Write',
      'link'  : '/write'
    }, {
      'title' : 'About',
      'link'  : '/about'
    }];

    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });