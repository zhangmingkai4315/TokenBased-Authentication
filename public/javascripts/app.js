var app=angular.module('MyApp',[]);

app.factory('authInterceptor',function ($rootScope,$q,$window) {
  return{
    request:function (config) {
      config.headers=config.headers||{};
      if(window.sessionStorage.token){
        config.headers.Authorization='Bearer '+$window.sessionStorage.token;
      }
      return config;
    },
    response:function (response) {
      if(response.status===401){
        console.log("UnAuth");
      }
      return response||$q.when(response);
    }
  }
});

app.config(function ($httpProvider) {
  $httpProvider.interceptors.push('authInterceptor');
});




app.controller('UserCtrl',function ($scope,$window,$http) {
  'use strict';
  $scope.user = {username: 'mike', password: 'secret'};
  $scope.message = '';
  $scope.submit = function () {
    $http
      .post('/authenticate', $scope.user)
      .success(function (data, status, headers, config) {
        $window.sessionStorage.token = data.token;
        $scope.message = 'Welcome';
      })
      .error(function (data, status, headers, config) {
        // Erase the token if the user fails to log in
        delete $window.sessionStorage.token;
        $scope.message = 'Error: Invalid user or password';
      });
  };

  $scope.apiCall=function () {
    $http({url: '/api/restricted', method: 'GET'})
      .success(function (data, status, headers, config) {
        console.log(data.name);
      });
  }
});
