'use strict';

angular.module('ppApp')
  .controller('PostCtrl', function ($scope, $http, $state, $stateParams, Auth) {
    $scope.posts = [];

    $http.get('/api/posts').success(function(posts) {
      $scope.posts = posts;
    });

    /**
			* Submitting a new post
    **/

    $scope.currentUser = Auth.getCurrentUser();

    if(!$stateParams.postId || $stateParams.postId === 'new') {
    	console.log('Creating new post by user with id: ' + $scope.currentUser._id);
    	$scope.post = {
	    	title : 'Без названия',
	    	text  : 'Без содержания',
	    	created_by : {
	    		name: $scope.currentUser.name,
	        id: $scope.currentUser._id,
	    	},
	    	date : new Date(),
	    	image : undefined,
	    	active : true
    	};
    	$scope.newPost = true;
    } else {
    	console.log('Editing post with ID ' + $stateParams.postId);
      $http.get('/api/posts/' + $stateParams.postId)
	      .success(function(res) {
          $scope.post = res;
	      });
    }


  	$scope.addPost = function(){
  		let saveData = $scope.post;
	  	console.log(saveData);
	  	
  		if(!$scope.newPost) {
  			$http.put('api/posts/' + $scope.post._id, saveData)
	      	.then(function successCallback(res){
	      		console.log('Edited a post named ' + $scope.post._id + ' with following data: ' + saveData);
	      		$state.go('main');
	      });
  		} else {
	      $http.post('/api/posts', saveData)
	      	.then(function successCallback(res){
	      		console.log('Submitted a new post with following data: ' + saveData);
	      		$state.go('main');
	      });
    	}
  	};
  });
