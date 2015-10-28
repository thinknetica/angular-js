angular.module('thSample').controller('MountsController', function($scope, $location, $resource, $q){
  $scope.title = "Альпы";

  $scope.newMount = {};

  function parseResults(data, headersGetter){
    data = angular.fromJson(data);
    return data.results;
  }

  var Mount = $resource(
    'https://api.parse.com/1/classes/Mount/:objectId',
    {objectId: '@objectId'},
    {query: {isArray: true, transformResponse: parseResults}}
  )
  $scope.mounts = Mount.query();

  $scope.addMount = function(){
    var mountToServer = new Mount($scope.newMount);
    mountToServer.$save().then(
      function(mount){
        var mountFromServer = angular.extend(mount, $scope.newMount);
        $scope.mounts.push(mountFromServer);
        $scope.newMount = {};
      }
    ).catch(function(){
      $scope.errorMessage = 'Что-то пошло не так. Попробуйте еще раз';
    });
  };
});
