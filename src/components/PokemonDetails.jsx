import React from 'react';
class PokemonDetails extends React.Component{
  render(){
    const pokemon = this.props.pokemon;
    if(!pokemon) return null;
    return(<p>{pokemon.name}</p>)
  }
}
export default PokemonDetails;
