//app is our current angular app and service is the service
//we will create
//cut http, api from controller n copy to service
app.service('PokeService',function ($http){
var API = 'http://pokeapi.co/api/v2';

this.getAllPokemon = function (){
  //return the promise to the caller.
return $http.get(API + '/pokemon').then(function (response){
  console.log('Got a response from the API', response);
  //ctrl.pokemonList does not exist anymore instead use return
  //returned on response of promise
  return response.data.results;
}).catch(function(err){
  console.log('Error getting info from API', err);
 });
};
this.getPokemon = function (pokemon){
return $http.get(pokemon.url).then(function(response){
  console.log('Pokemon info', response.data);
  var foundPokemon = response.data;
return foundPokemon.sprites.front_default;//pokemon image
}).catch(function(err){
    console.log('Error getting info from API', err);
})
}

});
