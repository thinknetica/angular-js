angular.module('thSample').factory('Mount', function(){
  var mount = function(params){
    var self = this;

    angular.extend(self, params);

    self.fillData = function(data){
      angular.extend(self, data);
    }

    self.imageUrl = function(){
      if (self.photo && self.photo.url){
        return self.photo.url;
      } else {
        return 'assets/mountain.png';
      }
    }
  }

  return mount;
});
