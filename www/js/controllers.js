angular.module('starter.controllers', ["firebase"])


.controller('AppCtrl', function($scope, $firebase) {
  var ref = new Firebase("https://aupb944wv7q.firebaseio-demo.com/");
  $scope.messages = $firebase(ref);
  $scope.addMessage = function(e){
    if (e.keyCode != 13) return;
    $scope.messages.$add({from: $scope.name, body: $scope.msg});
    $scope.msg = "";
  }
  $scope.update = function(message) {
    //FRANK TODO: Button or Enter, collision happening somewhere - test
    $scope.messages.$add({from: $scope.name, body: $scope.msg});
    $scope.msg = "";
  };
})

// A simple controller that shows a tapped item's data
.controller('ProjectCtrl', function($scope, Projects) {
  $scope.onRefresh = function() {
    // Load content
    Users.load().then(function(users) {
      $scope.users = users;

      // Trigger refresh complete on the pull to refresh action
      $scope.$broadcast('scroll.refreshComplete');
    });
  };
})

// A simple controller that fetches a list of data
.controller('PetsTabCtrl', function($scope, Pets) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pets = Pets.all();

  $scope.$on('tab.shown', function() {
    // Might do a load here
  });
  $scope.$on('tab.hidden', function() {
    // Might recycle content here
  });
})


// A simple controller that shows a tapped item's data
.controller('PetCtrl', function($scope, $routeParams, Pets) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pet = Pets.get($routeParams.petId);
});




