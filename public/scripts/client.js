var app = angular.module('bookApp', []);
//overloaded method does 2 different things based on
//creating a new application based on the []

//another way to link controller via a named function
//giving a parm of $hhtp. in this case the actually name of the parm matters
//do not need this method unless ur minifying ur code
// app.controller(['http', BookController]);
// function BookController($http){
//
// }
app.controller('BookController', BookController);
function BookController($http){
//you can call it vm, ctrl, or name in html
//this our link between the view and controller
  var ctrl = this;

  ctrl.message = '';

  $http({
    method: 'GET',
    url: '/books'
  }).then(function(response){
    console.log('Got a response from the server', response);
    ctrl.message = response.data;
    //instead of seperating using a , use .catch instead
  }).catch (function(err){
    console.log('Error requesting data from server', err);
  })

}
