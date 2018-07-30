angular.module("starter")
.controller('MainCtrl', function($scope, $log, $location) {
    $scope.getClass = function (path) {
        return ($location.path().substr(0, path.length) === path) ? 'active' : '';
    }
})
.controller('HomeCtrl', function($scope, $log) {
    $scope.author = "@gowilango";
})
.controller('TaskCtrl', function($scope, $log, API) {
    API.TASK.query(function(response){
        $log.info("TASKS RECEIVED:: ", response);
        $scope.tasks = response;
    }, function(error) {
        $log.error(error);
    });
});
