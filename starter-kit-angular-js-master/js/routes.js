angular.module("starter")
.config(function($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: 'templates/home.html',
			controller: 'HomeCtrl'
		})
		.when('/tasks', {
			templateUrl: 'templates/tasks.html',
			controller: 'TaskCtrl'
		})
		.otherwise({
			redirectTo: '/home'
		});
});