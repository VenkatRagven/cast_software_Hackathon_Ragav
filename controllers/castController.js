castHack.controller("castController", ['$scope', '$http', '$window', '$timeout', '$location', '$anchorScroll',
    '$stateParams', '$state',
    '$filter','shareDataService',
    function ($scope, $http, $window, $timeout,
        $location, $anchorScroll, $stateParams,
        $state, $filter, shareDataService) {

        //alert('inside controller');
        //$scope.scoreData = {};
        console.log('loading controller');
        $http.get("https://api.github.com/search/repositories?q=%27topic%27").then(function (response) {
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

        $scope.searchText = '';



        $scope.redirect = function (value) {
            // alert(value);
            //$rootScope.searchText=value;
            //alert($rootScope.searchText);

            $scope.searchText = value;


            shareDataService.addList($scope.searchText);
            //alert($scope.searchText);
            window.location = "#/languages";

        }

    }
])


