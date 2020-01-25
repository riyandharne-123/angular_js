var app=angular.module("App",[]);

app.controller=("users",function($scope,$http){

  $http.get('http://localhost/Angular-js/Course_http/database.json')
.success(function(response){
$scope.persons=response.records.data;
});

});