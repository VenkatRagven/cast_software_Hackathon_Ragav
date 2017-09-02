
castHack.config(function($stateProvider,$urlRouterProvider){
	$stateProvider.state('home',{
			url: '/home',
			controller : 'castController',
			templateUrl : 'templates/home.html'
		
	})
	$stateProvider.state('user',{
			url: '/user',
			// controller : 'languagesController',
			controller : 'languagesController',
			templateUrl : 'templates/user.html'
		
	})
	$stateProvider.state('languages',{
			url: '/languages',
			// controller : 'languagesController',
			controller : 'userController',
			templateUrl : 'templates/languages.html'
		
	});
	
	$urlRouterProvider.otherwise('/home');
 });


	$(document).ready(function(){
		$('.userProfile').click(function(){
			$('.arrowBox').slideToggle("slow");
		});
	});

	
