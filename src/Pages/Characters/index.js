import React, { useEffect} from 'react';
import { usePerson } from '../../Hooks/usePerson';

export const Characters = () => {

  const {getAllPerson,dataPeople} = usePerson();

  useEffect(()=>{

    getAllPerson();

    console.log(dataPeople);

  }, [])
  return (
    <div>
      <h1>LOS PERSONAJES</h1>
      {dataPeople.map((people) => (
        <div className='card' key={people.birth_year}>
          <h1> {people.name} </h1>
          <p> {people.height} </p>
        </div>
        
      ))}
    </div>
  )
}
