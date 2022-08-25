import { useEffect, useState } from "react";
import { usePerson } from "../../Hooks/usePerson";
import { CardCharacter } from "./Card";
import imgPerson from "../../Assets/img/imgPerson.jpg";
// import { BsArrowRightSquareFill } from "react-icons/bs";

export const Characters = () => {
  const { getAllPerson, dataPeople, Contador, disminuir, aumentar, disabled } = usePerson();


  const [disabledRight, setDisabledRight] = useState(false);


  useEffect(() => {

    getAllPerson(Contador);

    if(Contador ===9){
        setDisabledRight(true);
      }
    if(Contador < 9){
      setDisabledRight(false);
    }

  }, [dataPeople]);

  

  return (
    <div>
      <h1>LOS PERSONAJES</h1>
      <div className="d-flex justify-content-center flex-wrap container-fluid">
        {dataPeople.map((people) => (
          <CardCharacter
            key={people.name}
            name={people.name}
            hairColor={people.hair_color}
            eyeColor={people.eye_color}
            skinColor={people.skin_color}
            gender={people.gender}
            height={people.height}
            mass={people.mass}
            birthYear={people.birth_year}
            styleButtonCharacter={people.eye_color}
            imgPerson={imgPerson}
            keyName={people.name}
            linkName={people.name}
            num={Contador}
          />
        ))}
      </div>
      <nav aria-label="Page navigation example" className="d-flex justify-content-center align-items-center">
        <ul className="pagination">
          <li className={disabled ? "page-item" :"page-item disabled"}>
            <button className="page-link" onClick={disminuir}>
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </button>
          </li>
          <li className="page-item">
              <p className="page-link">{Contador}</p>
          </li>
          <li className={disabledRight ? "page-item disabled" : "page-item"}>
            <button className="page-link" onClick={aumentar}>
              <span className="sr-only">Next</span>
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </ul>
      </nav>

    </div>
  );
};
