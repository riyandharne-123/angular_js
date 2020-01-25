var app=angular.module('mainApp',['ngRoute']);
//routing for main app.html
app.config(function($routeProvider){
   $routeProvider
   .when('/',{
templateUrl: 'Login.html'
   })
   .when('/dashboard',{
      resolve: {
  //function for checking if rootscope.loggedin==true 
    "check":function($location,$rootScope){
       if(!$rootScope.loggedIn){
          $location.path('/');
       }
    }
   },
   templateUrl:'Dashboard.html'
})
  .otherwise({
    redirectTo: '/'
});
});
//controlling for login.htm page
app.controller('loginCtrl',function($scope, $location, $rootScope){
$scope.submit=function(){

if($scope.username=="admin"&&$scope.password=="admin"){
   $rootScope.loggedIn=true;
   $location.path('/dashboard');
}
else{
  alert("username OR PASSWORD is wrong!!");
  $location.path('/');
  $rootScope.loggedIn=false;
}
};
});