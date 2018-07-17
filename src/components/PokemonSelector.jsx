import React from 'react';

const PokemonSelector = props => {

  function handleChange(event){
    props.handleChange(event.target.value);
  }

  const pokemon = props.pokemon.map((pokemon, index) => {
    return <option value={index} key={index}>{pokemon.name}</option>
  });

  return(<select id="pokemon-selector"  defaultValue="default" onChange={handleChange}>
    <option disabled value="default">Choose a pokemon...</option>
    {pokemon}
  </select>)

}
export default PokemonSelector;
