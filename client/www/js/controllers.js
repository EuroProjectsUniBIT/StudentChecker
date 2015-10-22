angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {

  $scope.data = {
    showDelete: false
  };

  $scope.edit = function(item) {
    alert('Edit Item: ' + item.id);
  };
  $scope.share = function(item) {
    alert('Share Item: ' + item.id);
  };

  $scope.moveItem = function(item, fromIndex, toIndex) {
    $scope.items.splice(fromIndex, 1);
    $scope.items.splice(toIndex, 0, item);
  };

  $scope.onItemDelete = function(item) {
    $scope.items.splice($scope.items.indexOf(item), 1);
  };
  var students = [{
    id: '1234'
  }];
  localStorage.setItem('students', JSON.stringify(students));

  $scope.items = JSON.parse(localStorage.getItem('students'));

})

.controller('PlaylistCtrl', function($scope, $stateParams) {

  })
  .controller('BarcodeCtrl', function($scope, $cordovaBarcodeScanner) {

    $scope.scan = function() {
      $cordovaBarcodeScanner
        .scan()
        .then(function(barcodeData) {
          var test = JSON.parse(localStorage.getItem('students'));
          test.push({
            id: barcodeData.text
          });
          localStorage.setItem('students', JSON.stringify(test));
          alert(barcodeData.text);

          // Success! Barcode data is here
        }, function(error) {
          // An error occurred
        });
    };

  });
