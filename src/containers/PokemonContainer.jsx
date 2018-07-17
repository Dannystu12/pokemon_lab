import React from 'react';
import PokemonDetails from '../components/PokemonDetails.jsx';
import PokemonSelector from '../components/PokemonSelector.jsx';

class PokemonContainer extends React.Component{
  render(){
    return(<div>
      <PokemonDetails />
      <PokemonSelector />
    </div>)

  }
}
export default PokemonContainer;
