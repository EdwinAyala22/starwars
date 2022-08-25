import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { usePerson } from "../../../Hooks/usePerson";
import { useParams } from "react-router-dom";

import imgGenerica from "../../../Assets/img/imgPerson.jpg";

export const DetailCharacter = () => {
  const { getDataApi, back, getAllPerson, dataPeople, dataApi } = usePerson();

  const params = useParams();
  console.log(params);
  const listParams = [params];

  const mapeo = listParams.map((list) => list.linkname);
  const mapeo2 = listParams.map((list) => list.num);

  var nombre = mapeo[0];
  var numero = mapeo2[0];

  useEffect(() => {
    getAllPerson(numero);
  }, []);

  console.log(numero);

  const filtro = dataPeople.filter((nashe) => nashe.name === nombre);

  console.log(filtro);

  const mapeo3 = filtro.map((per) => per.homeworld);
  var homeWorld = mapeo3[0];
  console.log(homeWorld);

  useEffect(() => {

    getDataApi(homeWorld);

  }, []);

  console.log(dataApi)

  return (
    <div>
      <Button className="buttonCardCharacter" onClick={back}>
        Volver
      </Button>
      <h1 className="text-center">Detalle Personaje</h1>
      <div className="container">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-5 d-md-none d-lg-block">
              <img src={imgGenerica} className="img-fluid rounded-start" />
              {/* <img src="..." class="img-fluid rounded-start" alt="..."> */}
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h5 className="card-title">Nombre personaje: {nombre}</h5>
                {filtro.map((persona) => (
                  <div key={persona.name} className="row mt-5">
                    <div className="col-md-6">
                      <p><b>Birth year:</b> {persona.birth_year}</p>
                      <p><b>Created:</b> {persona.created}</p>
                      <p><b>Edited:</b> {persona.edited}</p>
                      <p><b>Eye color:</b> {persona.eye_color}</p>
                      <p><b>Gender:</b> {persona.gender}</p>
                    </div>
                    <div className="col-md-6">
                      <p><b>Hair color:</b> {persona.hair_color}</p>
                      <p><b>Height:</b> {persona.height} cm</p>
                      <p><b>Mass:</b> {persona.height} kg</p>
                      <p><b>Skin color:</b> {persona.height} kg</p>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              {dataApi.map((world) => (
                <div key={world.name} className="card text-white bg-dark mb-3" style="max-width: 18rem;">
                  <div className="card-header">Homeworld</div>
                  <div className="card-body">
                    <h5 className="card-title">{world.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
