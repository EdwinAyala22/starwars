import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { usePerson } from "../../../Hooks/usePerson";
import { useParams } from "react-router-dom";
import { usePlanets } from "../../../Hooks/usePlanets";

import imgGenerica from "../../../Assets/img/imgPerson.jpg";
import { useFilms } from "../../../Hooks/useFilms";

export const DetailCharacter = () => {
  const { back, getAllPerson, dataPeople } = usePerson();
  const { dataPlanetPerson, getDetailPlanet } = usePlanets();
  const {dataFilms, pintarPeliculas} = useFilms();
  const params = useParams();
  // console.log(params);
  const listParams = [params];

  const mapeo = listParams.map((list) => list.linkname);
  const mapeo2 = listParams.map((list) => list.num);

  var nombre = mapeo[0];
  var numero = mapeo2[0];

  useEffect(() => {
    getAllPerson(numero);
  }, [numero]);


  const filtro = dataPeople.filter((nashe) => nashe.name === nombre);

  const mapeo3 = filtro.map((per) => per.homeworld);
  const mapeo4 = filtro.map((pers) => pers.films);
  var homeWorld = mapeo3[0];
  var peliculas = mapeo4;
  pintarPeliculas(peliculas);
  console.log(dataFilms);
  getDetailPlanet(homeWorld);

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
                      <p>
                        <b>Birth year:</b> {persona.birth_year}
                      </p>
                      <p>
                        <b>Created:</b> {persona.created}
                      </p>
                      <p>
                        <b>Edited:</b> {persona.edited}
                      </p>
                      <p>
                        <b>Eye color:</b> {persona.eye_color}
                      </p>
                      <p>
                        <b>Gender:</b> {persona.gender}
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p>
                        <b>Hair color:</b> {persona.hair_color}
                      </p>
                      <p>
                        <b>Height:</b> {persona.height} cm
                      </p>
                      <p>
                        <b>Mass:</b> {persona.mass} kg
                      </p>
                      <p>
                        <b>Skin color:</b> {persona.skin_color}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container p-4">
        {dataPlanetPerson?.length > 0 && (
          <div className="card text-bg-warning mb-3" style={{maxWidth: "18rem"}}>
            <div className="card-header fw-bold">Home World</div>
            <div className="card-body">
              <h5 className="card-title text-center">{dataPlanetPerson[0].name}</h5>
              <p><b>Terrain:</b> {dataPlanetPerson[0].terrain}</p>
              <p><b>Population:</b> {dataPlanetPerson[0].population}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
