import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './card.css';
import CardHeader from "react-bootstrap/esm/CardHeader";
import {Link} from 'react-router-dom';
// import {imgPerson} from "../../Assets/img/imgPerson.jpg";

export const CardCharacter = ({name, hairColor, eyeColor, skinColor, gender, height, mass, birthYear, imgPerson, linkName, keyName}) => {
  return (
    <Card style={{ width: "19rem" }} className="m-5 text-center cardCharacter" >
      <CardHeader className="bg-dark text-white fw-bold">
        {name}
      </CardHeader>
        <Card.Img variant="top" src={imgPerson} style={{borderRadius: 0}} />
      <ListGroup className="list-group-flush">
        <ListGroup.Item><b>Hair color:</b> {hairColor}</ListGroup.Item>
        <ListGroup.Item><b>Eye color:</b> {eyeColor}</ListGroup.Item>
        <ListGroup.Item><b>Skin color:</b> {skinColor}</ListGroup.Item>
        <ListGroup.Item><b>Gender:</b> {gender}</ListGroup.Item>
        <ListGroup.Item><b>Height:</b> {height}</ListGroup.Item>
        <ListGroup.Item><b>Mass:</b> {mass}</ListGroup.Item>
        <ListGroup.Item><b>Birth year:</b> {birthYear}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Link to={`/details/${linkName}`} key={keyName}>
          <Button className="buttonCardCharacter" >Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
