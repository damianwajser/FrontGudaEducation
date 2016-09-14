angular.module('RDash').factory('SecurityService',['$http', '$q', 'apiUrl', '$location', SecurityService]);

function SecurityService($http, $q, apiUrl, $location) {

  var resource = "session";

  var service = {};
  service.login = login;
  service.getUrl = getUrl;
  return service;

  function getUrl(){
    var q = $q.defer();
    console.log("login");
    $http.get(apiUrl + "login").then(function(data) {
      console.log(data.data.data);
      q.resolve(data.data.data);

      //q.resolve("https://www.linkedin.com/oauth/v2/authorization?client_id=7893ycrop1rai5&redirect_uri=http%3A%2F%2Flocalhost%3A8000&scope=r_basicprofile+r_emailaddress&response_type=code&state=5uR6y4Ev9iNQ2pcpkevhTgB0y9W3dv8f26sp04O8");
    }, function(error) {
      q.reject(error);
    });
    return q.promise;
  }
  function login(token){
    var q = $q.defer();
    console.log("login");
    $http.get(apiUrl + "?code=" + token).then(function(data) {
      q.resolve(data.data);
      console.log("login ok");
    }, function(error) {
      q.reject(error);
    });
    return q.promise;
  }
};
