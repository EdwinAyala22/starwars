import React, { useEffect} from 'react';
import { usePlanets } from '../../Hooks/usePlanets';

export const Planets = () => {


  const {getAllPlanets,dataPlanets} = usePlanets();

  useEffect(()=>{

    getAllPlanets();

    console.log(dataPlanets);

  }, [])
  return (
    <div>
      <h1>LOS PERSONAJES</h1>
      {dataPlanets.map((planets) => (
        <div className='card' key={planets.name}>
          <h1> {planets.name} </h1>
          <p> {planets.created} </p>
        </div>
        
      ))}
    </div>
  )
}
