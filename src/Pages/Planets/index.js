import { useEffect} from 'react';
import { usePlanets } from '../../Hooks/usePlanets';
import { CardPlanets } from './Card';
import imgPlanet from "../../Assets/img/imgPlanet.jpg";

export const Planets = () => {



  const {getAllPlanets,dataPlanets} = usePlanets();

  useEffect(()=>{

    getAllPlanets();

    console.log(dataPlanets);

  })
  return (
    <div>
      <h1>LOS PLANETAS</h1>
      <div className="d-flex justify-content-center flex-wrap container-fluid">
        {dataPlanets.map((planets) => (
          <CardPlanets
            key={planets.name}
            name={planets.name}
            terrain={planets.terrain}
            population={planets.population}
            gravity={planets.gravity}
            climate={planets.climate}
            diameter={planets.diameter}
            rotation={planets.rotation_period}
            surfaceWater={planets.surface_water}
            imgPlanet={imgPlanet}
          />
        ))}
      </div>
      <div className="container d-flex justify-content-center align-items-center">
          <button>Next</button>
      </div>
    </div>
  )
}
