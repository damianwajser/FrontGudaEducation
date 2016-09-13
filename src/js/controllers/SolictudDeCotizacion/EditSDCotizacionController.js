angular.module('RDash')
    .controller('EditSDCotizacionCtrl', ['$scope','$rootScope','$state','$stateParams',
    'SolicitudesDeCotizacionService',EditSDCotizacionCtrl]);

function EditSDCotizacionCtrl($scope, $rootScope, $state, $stateParams,
  SolicitudesDeCotizacionService) {
    console.log("entre a editar");
    $scope.solicitud = {};
    $scope.solicitud_servicio = {};
    SolicitudesDeCotizacionService.findById($stateParams.solicitudId)
      .then(function(result){
          console.log(result);
          $scope.solicitud = result;
          $scope.solicitud_servicio = result.solicitud_servicio[0];
      });

    $rootScope.title = "Edicion de Solicitud de Cotizacion";
    $rootScope.route = "Solicitud de Cotizacion / Edicion de Solicitud de Cotizacion";

    $scope.save = function(){
        SolicitudesDeCotizacionService.update($scope.solicitud).then(function(){
          $state.go("base.solicitudesDeCotizacion");
        });
    }
    $scope.delete = function(){
        SolicitudesDeCotizacionService.deleteById($scope.solicitud._id).then(function(){
          $state.go("base.solicitudesDeCotizacion");
        });
    }
}
