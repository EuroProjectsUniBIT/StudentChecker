angular.module('starter')
  .factory('studentsList', function studentsListFactory($http, $q) {

    var students = {};
    var defer = $q.defer();
    var temp = {};

    students.getCheckins = function() {
      $http.get('http://78.90.149.55:3000/checkins/all')
        .success(function(data, status, headers, config) {
          // console.log(data);
          var temp = data;
          defer.resolve(data);
        })
        .error(function(err, status, headers, config) {


        });
        return defer.promise;
    };
    return students;

  });
