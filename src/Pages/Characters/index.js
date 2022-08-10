import React, { useEffect} from 'react';
import { usePerson } from '../../Hooks/usePerson';

export const Characters = () => {
// const [isLoading, setIsLoading] = useState(true);
// const [personajes, setPersonajes] = useState([]);

  const {getAllPerson,dataPeople} = usePerson();

  useEffect(()=>{
    getAllPerson();
    // let data = [dataPeople];
    // data[0].map((result) => (console.log(result.count)) )
    let data = Object.keys(dataPeople);
    for (let i = 0; i < data.length; i++) {
      let clave = data[i];
      console.log(dataPeople[clave])
      
    }
  }, []);
  return (
    <div>
      
    </div>
  )
}
