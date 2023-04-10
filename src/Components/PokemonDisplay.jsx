import React, {useEffect, useState} from 'react'

const PokemonDisplay = ({ pokemon }) => {
    const [data, setData] = useState(null)
    
    function toTitleCase(str) {
      return str.replace(
        /\w\S*/g,
        function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
      );
    }

    useEffect(() => {
      fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon)
        .then((res) => res.json())
        .then((d) => {
            console.log(d)
            setData(d)
        })
    }, [])
    

  return (
    <>
        {data != null ? <div className='pokemonDisplay'>
            <div className='spriteHolder'>
            <img className='sprite' src={data.sprites.front_default}/>
            </div>
            <h1>{toTitleCase(data.name)}</h1>
        </div> : <></>}
    </>
  )
}

export default PokemonDisplay