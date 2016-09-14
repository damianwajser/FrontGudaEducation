angular.module('RDash')
    .controller('LoginCtrl', ['$scope','$rootScope','$state',"$window","$location", 'SecurityService',
    LoginCtrl]);

function LoginCtrl($scope, $rootScope ,$state, $window, $location,SecurityService) {

    function init(){

      var code = window.location.search.replace("?code=","");
      console.log(code);
      if(code){
        SecurityService.login(code).then(function(result){
            console.log(result);
            $rootScope.session = result;
            $http.defaults.headers.common.Authorization = result.token;
            $state.go("base.newSolicitudesDeCotizacion");
        }, function(err){
          console.log(err);
          debugger;
        });
      }
    };


    $scope.redirect = function(){
      SecurityService.getUrl().then(function(result){
        console.log(result);
        $window.location.href = result;
      });
    };
    init();
}
