import { useEffect } from "react";
import { usePerson } from "../../Hooks/usePerson";
import { CardCharacter } from "./Card";

export const Characters = () => {
  const { getAllPerson, dataPeople } = usePerson();

  useEffect(() => {
    getAllPerson();

    console.log(dataPeople);
  }, []);
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
          />
        ))}
      </div>
    </div>
  );
};
