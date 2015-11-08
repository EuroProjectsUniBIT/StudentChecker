angular.module('starter.controllers').controller('CheckinsCtrl', function($scope, studentsList) {

  $scope.studentsList = studentsList.getCheckins();

  // console.log($scope.studentsList);
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
    console.log($scope.studentsList);
    // $scope.studentsList.splice($scope.studentsList.indexOf(item), 1);
  };

});
