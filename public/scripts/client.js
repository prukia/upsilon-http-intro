var app = angular.module('pokeApp', []);

app.controller('PokemonController', ['PokeService', function(PokeService){
  console.log('PokemonController loaded');


  var ctrl = this;
  var currentlySelectedPokemon = {};
  ctrl.pokemonList = [{name: 'Squirtle'},
                      {name:'Bulbasaur'},
                      {name: 'Charmander'},
                      {name: 'Pikachu'}];


ctrl.currentPokemon = {};
//calling function on the service which will return a promise
//then we will have access to that array of pokemon
PokeService.getAllPokemon().then(function (pokelist){
  ctrl.pokemonList = pokelist;
})
ctrl.iChooseYou = function(pokemon){
  console.log('Chose', pokemon);
  PokeService.getPokemon(pokemon).then(function (imageUrl){
    togglePokemon(pokemon);
    ctrl.currentPokemon.imageUrl = imageUrl;
    ctrl.currentPokemon.name = pokemon.name;
});
};
function togglePokemon(pokemon){
  currentlySelectedPokemon.chosen = false;
  currentlySelectedPokemon = pokemon;
  pokemon.chosen = true;
}
}]);
// $http.get(API + '/pokemon'){
//   params: {
//     api_key: 'dc6zaTOxFJmzC',
//     q: 'search'
//   }
// }
// $http({
//   url:(API + '/pokemon')
//   type: 'GET'
//   params: {
//     api_key: 'dc6zaTOxFJmzC',
//     q: 'search'
//   }
// }
