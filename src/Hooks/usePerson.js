// import React from 'react';

import { useState } from "react";

export const usePerson = () => {
  const [dataPeople, setDataPeople] = useState([]);

  const [Contador, setContador] = useState(1);
  
  const [disabled, setDisabled] = useState(false);


  const disminuir = () => {
    if (Contador <= 1) {
      setContador(1);
      setDisabled(false);
    } else {
      setContador(Contador - 1);
      setDisabled(true);
    }
  };
  const aumentar = () => {

    if(Contador >=9){

    }
    else{
      setContador(Contador + 1);
      setDisabled(true)
    }

  };

  const getAllPerson = async (numberPage) => {
    try {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      await fetch(
        `https://swapi.dev/api/people/?page=${numberPage}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => setDataPeople(result.results))
        .catch((error) => console.log("error", error));
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getAllPerson,
    dataPeople,
    Contador,
    aumentar,
    disminuir,
    disabled, 
  };
};
