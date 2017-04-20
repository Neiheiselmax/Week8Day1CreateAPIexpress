(function() {
    'use strict';

    angular
        .module('taco')
        .factory('API', function($http){

          return {
            getUsers:()=>{
              return $http({
                method:"GET",
                url:"http://localhost:8080/people",
              })
            },
            createUsers:(data)=>{
              return $http({
                method:"POST",
                data: data,
                url:`http://localhost:8080/people/`,
              })
            },
            getUsers:(id)=>{
              return $http({
                method:"POST",
                url:`http://localhost:8080/people/${id}`,
          })
        },
        getUsers:(id)=>{
          return $http({
            method:"DELETE",
            url:`http://localhost:8080/people/${id}`,
          })
        }
      }
    })
})();
