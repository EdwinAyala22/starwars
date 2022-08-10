// import React from 'react';

import { useState } from "react";

export const usePerson = () => {

    const [dataPeople, setDataPeople] = useState([])

    const getAllPerson = ()=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://swapi.dev/api/people/", requestOptions)
            .then(response => response.text())
            .then(result => setDataPeople([result]))
            .catch(error => console.log('error', error));
    }

  return {
    getAllPerson,
    dataPeople
  };
};
