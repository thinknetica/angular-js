angular.module('thSample').factory('NotificationFactory', function($rootScope){
  var self = {};

  function push(message){
    if (Notification.permission === "granted") {
      var notification = new Notification(message);
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {
        if (permission === "granted") {
          var notification = new Notification(message);
        }
      });
    }
  }

  self.listen = function(){
    $rootScope.$on('desktopNotify', function(e, data){
      push(data.message);
    })
  }

  return self;
})
