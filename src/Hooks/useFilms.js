import { useState } from "react";

export const useFilms = () => {

    const [dataFilms, setDataFilms] = useState([]);

    const getFilmPerson = async (laUrl) => {
        try {
          var requestOptions = {
            method: "GET",
            redirect: "follow",
          };
    
          await fetch(
            laUrl,
            requestOptions
          )
            .then((response) => response.json())
            .then((result) => setDataFilms(...dataFilms,result))
            .catch((error) => console.log("error", error));
        } catch (error) {
          console.log(error);
        }
      }

    const pintarPeliculas = (lista) =>{
        // var peliculas = []
        for (var i = 0; i > lista.length; i++ ){
            getFilmPerson(lista[i]);
        }

    }

  return {
    pintarPeliculas,
    dataFilms
  };    
}
