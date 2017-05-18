var app= angular.module('myApp', ['ngRoute']);

app.config(['$locationProvider',function($locationProvider) {
	$locationProvider.hashPrefix('')
}])
app.config(['$routeProvider',function($routeProvider) {

	$routeProvider
			.when('/:id',{

				templateUrl: "pages/home.html",
				controller: 'myHomeController',
				caseInsensitiveMatch: true

			})
			.when('/register/:name',{
				templateUrl: "pages/register.html",
				controller: 'myRegController',
				caseInsensitiveMatch: true		
				
			})
			.when('/login/:password',{
				templateUrl:"pages/login.html",
				controller: 'myLoginController',
				caseInsensitiveMatch: true
			})
	
}])

app.controller('myHomeController', ['$scope','$routeParams', function($scope,$routeParams){
			$scope.ID="This is the id =" + $routeParams.id;
	
}])
app.controller('myRegController', ['$scope','$routeParams', function($scope,$routeParams){
			$scope.Name="This is the name=" + $routeParams.name;
}])

app.controller('myLoginController', ['$scope','$routeParams', function($scope, $routeParams){
			$scope.Pass="This is the password="+ $routeParams.password;
}])