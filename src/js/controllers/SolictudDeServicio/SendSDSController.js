angular.module('RDash')
    .controller('SendSDSCtrl', ['$scope','$rootScope','$state','$stateParams',
    'SolicitudDeServicioService', 'TallerService','SolicitudesDeCotizacionService', SendSDSCtrl]);

function SendSDSCtrl($scope, $rootScope, $state, $stateParams,
  SolicitudDeServicioService, TallerService, SolicitudesDeCotizacionService) {

    SolicitudDeServicioService.findById($stateParams.solicitudId)
      .then(function(result){
          console.log(result);
          $scope.solicitud = result;
      });

    TallerService.getAll().then(function(data){
      $scope.talleres = data;
    });

    $rootScope.title = "Edicion de Talleres";
    $rootScope.route = "Talleres / Enviar Solicitud de Cotizacion";

    $scope.save = function(){
        SolicitudesDeCotizacionService.send($scope.solicitud._id, $scope.solicitud.taller._id).then(function(){
          $state.go("base.solicitudesDeServicio");
        });
    }
}
