(function() {
    'use strict';

    angular
        .module('taco')
        .controller('TacoController', function(API) {
          const vm = this;
          let users = API.getUsers();
          users.then(response=>{
            console.log(response);
            vm.tacos = response.data;
          });

          vm.user = {name:'',age:'',id:'',likesJS:false}

          vm.submitForm = function(){
            let user = vm.user;
            let newUser = API.createUsers(user);
            newUser.then(res=>{
              vm.tacos = res.data;
            })
          };

          vm.deleteItem = function(id){
            let deleteData = API.deleteUser(id);
            deleteData.then(res=>{
              vm.people = res.data;
            })
          };

        })

       })();
