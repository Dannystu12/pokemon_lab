import React from 'react';
import PokemonDetails from '../components/PokemonDetails.jsx';
import PokemonSelector from '../components/PokemonSelector.jsx';

class PokemonContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      pokemon: [
        {url: "https://pokeapi.co/api/v2/pokemon/1/",
        name: "bulbasaur"}
      ]
    }
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
      <PokemonSelector pokemon={this.state.pokemon}/>
      <PokemonDetails />
    </div>)

  }
}
export default PokemonContainer;
