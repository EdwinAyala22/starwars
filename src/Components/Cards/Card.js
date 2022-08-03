import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './card.css';


export const CardApp = ({imageSrc, title, text}) => {
  return (
    <Card style={{ width: "18rem" }} className="m-5 text-center cardApp">
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <p>
            {text}
          </p>
          
        </Card.Text>
        {/* <div>
          <ButtonCard type={'submit'} name={'Go somewhere'}/>
        </div> */}
        <Button className="buttonCard">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

