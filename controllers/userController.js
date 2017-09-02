castHack.controller("userController", ['$scope', '$http', '$window', '$timeout', '$location', '$anchorScroll',
    '$stateParams', '$state',
    '$filter','shareDataService',
    function ($scope, $http, $window, $timeout,
        $location, $anchorScroll, $stateParams,
        $state, $filter, shareDataService) {

        //alert('inside controller');
        //$rootScope.searchtxt = value;
        //$scope.searchtxt = "javascript";
        $scope.searchtxt = shareDataService.getList();

        //$scope.searchtxt = passDataService.getData();
        //alert($scope.searchtxt);


        $http.get("https://api.github.com/search/repositories?q=" + $scope.searchtxt).then(function (response) {
            $scope.myData = response.data.items;
            $scope.output = {};
            $scope.myData.forEach(function (entry) {
                var language = entry.language;
                if (language) {
                    var count = $scope.output[language];
                    if (!count) {
                        count = 0;
                    }
                    $scope.output[language] = count + 1;
                }
            });
        });

        console.log('loading controller');
        //  $http.get("https://api.github.com/search/repositories?q=%27topic%27").then(function (response) {
        //        $scope.myData = response.data.items;
        // });

    }
])