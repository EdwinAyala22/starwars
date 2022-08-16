import React from "react";
import {CardApp} from "./Card";
import { Container } from "react-bootstrap";
import imgCard1 from "../../Assets/img/imgCard1.jpg";
import imgCard2 from "../../Assets/img/imgCard2.jpg";
import imgCard3 from "../../Assets/img/imgCard3.jpg";

const cards = [
  {
    id: 1,
    title: "BB-8",
    image: imgCard1,
    text: "Era un droide astromecánico de laserie BB La mayor parte de su cuerpo estaba formado por una esfera metálica que le permitía rodar para desplazarse, en su mayoría era de color blanco con algunos tonos naranja, tenía una cabeza en forma de domo parecida al de un droide astromecánico serie R2, en donde tenía un fotorreceptor negro. El droide perteneció al piloto Poe Dameron de la Resistencia."
  },
  {
    id: 2,
    title: "Obi-Wan Kenobi",
    image: imgCard2,
    text: "Fue un legendario Maestro Jedi humano que sirvió en el Alto Consejo Jedi durante los últimos añosde la Era de la República. Como General Jedi, Kenobi sirvió en el Gran Ejército de la República durante las Guerras Clon. Kenobi, sin embargo, se vio obligado a exiliarse como resultado de la Gran Purga Jedi. Como mentor, Kenobi fue responsable del entrenamiento de dos miembros de la familia Skywalker, Anakin Skywalker y Luke Skywalker."
  },
  {
    id: 3,
    title: "C-3PO",
    image: imgCard3,
    text: "Era un droide de protocolo unidad 3PO diseñado para interactuar con seres orgánicos, programado principalmente para la etiqueta y el protocolo. Hablaba con fluidez más de siete millones de formas de comunicación, y desarrolló una personalidad exigente y propensa a las preocupaciones a lo largo de sus muchas décadas de operación."
  }
];


export const CardsApp = () => {
  return (
    <Container className="d-flex justify-content-center flex-wrap">
      {cards.map((card) => (
        <CardApp key={card.id} title={card.title} imageSrc={card.image} text={card.text} />
      ))}
    </Container>
  );
}

