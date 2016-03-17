beardyApp.controller('LoginController', ['$scope', '$http', '$state', function($scope, $http, $state){
	console.log('its login controller');

	function userLoggedIn( user ) {
		$state.go('main');
		console.log(user);
		localStorage.setItem('current_user', $scope.login);
	}

	function gotError( err ) {
		console.log( "error message - " + err.message );
		console.log( "error code - " + err.statusCode );
	}

	$scope.loginMe = function() {
		var username = $scope.login;
		var password = $scope.password;
		var remember = $scope.remember;
		console.log(username, password, remember);
		Backendless.UserService.login(username, password, remember, new Backendless.Async(userLoggedIn, gotError));
	};

}]);
