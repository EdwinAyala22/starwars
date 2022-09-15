/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { usePerson } from '../../Hooks/usePerson';
import { useParams } from "react-router-dom";
import { usePlanets } from '../../Hooks/usePlanets';
import { useFilms } from '../../Hooks/useFilms';
import { Detalles } from './detalles';
import imagen from '../../Assets/img/detailsPeople.jpg';
import { Button } from "react-bootstrap";
import { Cards } from './cards';

export const DetailsCharacters = () => {
  const { getDetailPerson, detail, back } = usePerson();
  const { getHomeworld, homeworld } = usePlanets();
  const { getFilms, films } = useFilms();
  const params = useParams();
  const link = window.atob(params.linkname);

  // console.log(detail);
  useEffect(() => {
    
    const ready = async ()=>{
      await getDetailPerson(link);
      
      getHomeworld(detail.homeworld);
      getFilms(detail.films)
      // for (let i = 0; i < detail.films.length; i++){
      //   console.log(detail.films[i])
      //   getFilms(detail.films[i]);
      // }
    }


    // const tiempo = setTimeout(() => {getHomeworld(elPlaneta)}, 10000);
    // return () => clearTimeout(tiempo);
    
    // const pelis = detail.films;
    //   for (let i = 0; i < pelis.length; i++) {
    //   getFilms(pelis[i]);
    //   // const lasPelis = [...films, pelis[i]];
    //   // console.log(lasPelis);
    // }
    ready();
  }, [detail?.homeworld]);

      // for (let i = 0; i < pelis.length; i++) {
      // getFilms(pelis[i]);
     // }
  // console.log(films);
  // const elPlaneta = detail.homeworld;
  // const peliculas = detail.films;
  // const species = detail.species;
  // const starships = detail.starships;
  // const vehicles = detail.vehicles;
  // for (let i = 0; i < films.length; i++) {
  //   console.log(films[i]);
  // } 
  
  return (
    <>
      <Button className="buttonCardCharacter m-2" onClick={back}>
        Volver
      </Button>
      <div className='container mb-4'>
        <h1 className='text-center m-4 fw-bold'>DETAILS CHARACTER</h1>
        <div className='row'>
          <div className='col-md-3 d-flex justify-content-center align-items-center'>
            <img
              src={imagen}
              height="300"
              className="rounded"
              alt="starwars"
            />
          </div>
          <div className='col-md-9 bg-dark d-flex justify-content-center align-items-center flex-wrap rounded'>
            <h2 className='text-white'>{detail.name}</h2>
            <Detalles
              gender={detail.gender}
              birth={detail.birth_year}
              height={detail.height}
              mass={detail.mass}
              planet={homeworld.name}
              eye={detail.eye_color}
              skin={detail.skin_color}
              hair={detail.hair_color}
              created={detail.created}
              edited={detail.edited}
            />
          </div>
        </div>
        <div className='row'>
            <div className='col-md-3'>

            </div>
            <div className='col-md-9'>
                <Cards
                  title={films}
                />
            </div>
        </div>
        {/* <p>Name: </p>
        <p>Homeworld: {homeworld.name}</p> */}
        {/* <p>{films}</p> */}
      </div>
    </>
  )
}
