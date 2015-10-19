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
    	console.log('Creating new post');
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
    	console.log('Editing post');
      $http.get('/api/posts/' + $stateParams.postId)
	      .success(function(res) {
          $scope.post = res;
	      });
    }


  	$scope.addPost = function(){
  		let saveData = $scope.post;
	  	console.log(saveData);

  		if(!$scope.newPost) {
  			console.log(form);
  		} else {
	      $http.post('/api/posts', saveData)
	      	.then(function successCallback(res){
	      		$state.go('main');
	      		console.log('Submitted a new post with following data: ' + saveData);
	      });
    	}
  	};
  });
