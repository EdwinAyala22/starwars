import React, {useState} from 'react'

export const useFilms = () => {
    
    const [films, setFilms] = useState([]);

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

    let x =0;

      const getFilms = (url) => {
        // console.log(url);
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
