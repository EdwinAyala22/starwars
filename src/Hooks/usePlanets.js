import { useState } from "react";

export const usePlanets = () => {

    const [dataPlanets, setDataPlanets] = useState([])
    const [dataPlanetPerson, setDataPlanetPerson] = useState([])

    const getAllPlanets = ()=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://swapi.dev/api/planets/", requestOptions)
            .then(response => response.json())
            .then(result => setDataPlanets(result.results))
            .catch(error => console.log('error', error));
    }

    // const getPlanetPerson = ({url})=>{
    //   var requestOptions = {
    //         method: 'GET',
    //         redirect: 'follow'
    //       };
          
    //       fetch(''+url+'', requestOptions)
    //         .then(response => response.json())
    //         .then(result => setDataPlanetPerson(result))
    //         .catch(error => console.log('error', error));
    // }

    const getDetailPlanet = async (url) => {
      try {
        var requestOptions = {
          method: "GET",
          redirect: "follow",
        };
  
        await fetch(
          url,
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => setDataPlanetPerson([result]))
          .catch((error) => console.log("error", error));
      } catch (error) {
        console.log(error);
      }
    };

    

  return {
    getAllPlanets,
    dataPlanets, 
    getDetailPlanet,
    dataPlanetPerson,
    setDataPlanetPerson
  };
}
