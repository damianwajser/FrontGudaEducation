angular.module('RDash')
    .controller('TalleresCtrl', ['$scope','$rootScope','$state','TallerService',TalleresCtrl]);

function TalleresCtrl($scope, $rootScope, $state, TallerService) {
    $rootScope.title = "Talleres";
    $rootScope.route = "Talleres";

    $scope.talleres=[];

    TallerService.getAll().then(function(result){
        angular.extend($scope.talleres, result);
    });

    $scope.next = function(id){
        console.log(id);
        $state.go("base.editTaller", {tallerId : id});
    }
    $scope.add = function(){
        $state.go("base.newTaller");
    }
}
