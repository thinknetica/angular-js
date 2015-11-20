angular.module('thSample').factory('MountsCollection', function($http, Mount, config, MountainRange){
  var self = {};
  var mounts = [];
  var apiUrl = config.apiBaseUrl + 'Mount/'

  self.all = function(){
    var mounts = [];
    $http.get(apiUrl).then(function(response){
      angular.forEach(response.data.results, function(rawMount){
        rawMount.mountainRange = MountainRange.byTitle(rawMount.mountainRange)
        mounts.push(new Mount(rawMount));
      })
    })
    return mounts;
  }

  self.get = function(id){
    var mount = new Mount({});
    mount.promise = $http.get(apiUrl + id);
    mount.promise.then(function(response){ mount.fillData(response.data) });
    return mount;
  };

  self.create = function(data){
    return $http.post(apiUrl, data);
  }

  return self;
});
