angular.module('starter.controllers').controller('BarcodeCtrl', function($scope, $cordovaBarcodeScanner, studentsList) {

  $scope.scan = function() {
    alert('test');
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
