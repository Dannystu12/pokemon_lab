import React from 'react';

class PokemonSelector extends React.Component{

  render(){
    const pokemon = this.props.pokemon.map((pokemon, index) => {
      return <option value={index} key={index}>{pokemon.name}</option>
    });
    return(<select id="pokemon-selector"  defaultValue="default">
      <option disabled value="default">Choose a pokemon...</option>
      {pokemon}
    </select>)
  }
  
}
export default PokemonSelector;
