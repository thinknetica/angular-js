angular.module('thSample').factory('MountCollection', function($http, Mount, config){
  var self = {};
  var mountApi = config.apiBaseUrl + 'Mount/'

  self.all = function(){
    var mounts = []; // массив из объектов Mount
    $http.get(mountApi).then(function(respond){
      angular.forEach(respond.data.results, function(rawMount){
        mounts.push(new Mount(rawMount));
      })
    });
    return mounts;
  }

  self.get = function(id){
    var mount = new Mount();
    $http.get(mountApi + id).then(function(respond){
      angular.extend(mount, respond.data);
    });
    return mount;
  }


  return self;
});
