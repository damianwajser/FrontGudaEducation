angular.module('RDash')
    .controller('TecnologiasController', ['$scope','$rootScope','$state','SolicitudDeServicioService',TecnologiasController]);

function TecnologiasController($scope, $rootScope, $state, SolicitudDeServicioService) {
    $rootScope.title = "Tecnologias";
    $rootScope.route = "Tecnologias";

    $scope.tecnologias=[
      {
        name:"ruby",
        img: "https://hackealo.co/static/images/xico-ruby.png.pagespeed.ic.6ME5yJsBlu.png",
        id:1
      },
      {
        name:"java",
        img: "https://hackealo.co/static/images/xico-java.png.pagespeed.ic.Do73r2nxgS.png",
        id:1
      },
      {
        name:"python",
        img: "https://hackealo.co/static/images/xico-python.png.pagespeed.ic.bSbUc4EGg6.png",
        id:1
      },
      {
        name:"php",
        img: "https://hackealo.co/static/images/xico-php.png.pagespeed.ic.x-Jwg6oSO0.png",
        id:1
      }
    ];
}
