angular.module("starter")
.factory('API', function($resource) {
    return {
        TASK: $resource(endpoints.TASK)
    }
});