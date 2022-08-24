import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { usePerson } from "../../../Hooks/usePerson";
import { useParams } from "react-router-dom";

import imgGenerica from "../../../Assets/img/imgPerson.jpg";

export const DetailCharacter = () => {
  const { getPerson, back, getAllPerson, Contador, dataPeople } = usePerson();

  const params = useParams();
  const listParams = [params];

  const mapeo = listParams.map((list) => list.linkname);

  var nombre = mapeo[0];

  useEffect(() => {
    getAllPerson(Contador);
  }, []);

  console.log(Contador);

  const filtro = dataPeople.filter((nashe) => nashe.name === nombre);

  console.log(filtro);

  return (
    <div>
      <Button className="buttonCardCharacter" onClick={back}>
        Volver
      </Button>
      <h1 className="text-center">Detalle Personaje</h1>
      <div className="container">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4 d-md-none d-lg-block">
              <img src={imgGenerica} className="img-fluid rounded-start" />
              {/* <img src="..." class="img-fluid rounded-start" alt="..."> */}
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Nombre personaje: {nombre}</h5>
                {filtro.map((persona) => (
                  <div key={persona.name} className="row mt-3">
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <p>Birth year: {persona.birth_year}</p>
                        <p>Created: {persona.created}</p>
                        <p>Edited: {persona.edited}</p>
                        <p>Eye color: {persona.eye_color}</p>
                        <p>Gender: {persona.gender}</p>
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <p>Hair color: {persona.hair_color}</p>
                        <p>Height: {persona.height} cm</p>
                        <p>Mass: {persona.height} kg</p>
                        <p>Skin color: {persona.height} kg</p>
                    </div>
                  </div>
                ))}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
