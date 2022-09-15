import React, {useState} from 'react'

export const useFilms = () => {
    
    const [films, setFilms] = useState([]);
    // const [prueba, setPrueba] =useState([]);
    // var laLista = [];
    // const getFilms = async (url) => {
    //     // console.log(url);
    //     try {
    //       var requestOptions = {
    //         method: "GET",
    //         redirect: "follow",
    //       };
    
    //       await fetch(
    //         `${url}`,
    //         requestOptions
    //       )
    //         .then((response) => response.json())
    //         .then((result) => setFilms([...films, result]))
    //         .catch((error) => console.log("error", error));
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }

    // const getFilms = async (url) => {
    //   for (let i = 0; i < url.length; i++) {
    //     try {
    //       var requestOptions = {
    //         method: "GET",
    //         redirect: "follow",
    //       };
    
    //       await fetch(
    //         `${url[i]}`,
    //         requestOptions
    //       )
    //         .then((response) => response.json())
    //         .then((result) => setFilms( result?.title))
    //         .catch((error) => console.log("error", error));
    //     } catch (error) {
    //       console.log(error);
    //     }
    //     laLista.push(films);
    //   }
    //   setPrueba(laLista)
    // }

    let x =0;

      const getFilms = (url) => {
        url.map((peli) =>{
          try {
            var requestOptions = {
              method: "GET",
              redirect: "follow",
            };
      
             fetch(
              `${peli}`,
              requestOptions
            )
              .then((response) => response.json())
              .then((result) => setFilms([...films, result?.title]))
              // .then((result) => console.log(result, x++))
              .catch((error) => console.log("error", error));
          } catch (error) {
            console.log(error);
          }
        })
      }

    return {
        getFilms,
        films
  };
    
}
