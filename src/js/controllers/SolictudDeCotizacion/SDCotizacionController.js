angular.module('RDash')
    .controller('SDCotizacionCtrl', ['$scope','$rootScope','$state',
    'SolicitudesDeCotizacionService',SDCotizacionCtrl]);

function SDCotizacionCtrl($scope, $rootScope, $state, SolicitudesDeCotizacionService) {
    $rootScope.title = "Solicitud De Cotizacion";
    $rootScope.route = "Solicitud De Cotizacion";

    $scope.solicitudesPendientes=[];

    SolicitudesDeCotizacionService.getAll().then(function(result){
        console.log("solicitudes de cotizacion");
        console.log(result);
        angular.extend($scope.solicitudesPendientes, result);
    });

    $scope.next = function(id){
        console.log(id);
        $state.go("base.editSolicitudesDeCotizacion", {solicitudId : id});
    }
    $scope.send = function(id){
        console.log(id);
        $state.go("base.sendSolicitudDeCotizacion", {solicitudId : id});
    }
    $scope.add = function(){
        $state.go("base.newSolicitudesDeCotizacion");
    }
}
