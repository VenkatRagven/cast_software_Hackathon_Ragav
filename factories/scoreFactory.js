scoreApps.factory('scoreFactory', function($http,urlMapperService) {
	console.log("factory")
	var getScoreDetails= function(param) {
		var url = urlMapperService.getUrl('interviewDetailsUrl');		
		var targetUrl = url + 'userId='+param.userId 
	    return $http.get(targetUrl);
	  };
  return {
	  getScoreDetails: getScoreDetails
	  
  };
  
});


