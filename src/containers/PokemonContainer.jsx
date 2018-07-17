import React from 'react';
import PokemonDetails from '../components/PokemonDetails.jsx';
import PokemonSelector from '../components/PokemonSelector.jsx';

class PokemonContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      pokemon: [],
      selectedPokemon: null
    }
    this.handlePokemonSelect = this.handlePokemonSelect.bind(this);
  }

  componentDidMount(){
   const url = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
   fetch(url)
     .then(response => response.json())
     .then( pokemon => this.setState({pokemon: pokemon.results}))
     .catch(err => console.error(err))
  }

  render(){
    return(<div>
      <PokemonSelector pokemon={this.state.pokemon} handleChange={this.handlePokemonSelect}/>
      <PokemonDetails pokemon={this.state.selectedPokemon}/>
    </div>)
  }

  handlePokemonSelect(index){
    const selectedPokemon = this.state.pokemon[index];
    fetch(selectedPokemon.url)
    .then(response => response.json())
    .then(pokemon => this.setState({selectedPokemon: pokemon}))
  }
}
export default PokemonContainer;
