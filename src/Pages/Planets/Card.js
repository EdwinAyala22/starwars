import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './card.css';
import CardHeader from "react-bootstrap/esm/CardHeader";

export const CardPlanets = ({name, terrain, population, gravity, climate, diameter, rotation, surfaceWater, imgPlanet}) => {
  return (
    <Card style={{ width: "19rem" }} className="m-5 text-center cardPlanets" >
      <CardHeader className="bg-dark text-white fw-bold">
        {name}
      </CardHeader>
        <Card.Img variant="top" src={imgPlanet} style={{borderRadius: 0}} />
      <ListGroup className="list-group-flush">
        <ListGroup.Item><b>Terrain:</b> {terrain}</ListGroup.Item>
        <ListGroup.Item><b>Population:</b> {population}</ListGroup.Item>
        <ListGroup.Item><b>Gravity:</b> {gravity}</ListGroup.Item>
        <ListGroup.Item><b>Climate:</b> {climate}</ListGroup.Item>
        <ListGroup.Item><b>Diameter:</b> {diameter}</ListGroup.Item>
        <ListGroup.Item><b>Rotation period:</b> {rotation}</ListGroup.Item>
        <ListGroup.Item><b>Surface water:</b> {surfaceWater}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
          <Button className="buttonCardPlanets" >Details</Button>
      </Card.Body>
    </Card>
  );
}
