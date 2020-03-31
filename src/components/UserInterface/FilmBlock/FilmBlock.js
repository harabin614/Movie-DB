import React from "react";
import { Card, Button } from "react-bootstrap/";
import classes from "./FilmBlock.module.css";

const FilmBlock = props => {
  return (
    <React.Fragment>
      <div className={classes.Card}>
        <Card style={{ margin: "10% auto", color: "white" }}>
          <Card.Img
            src={`https://image.tmdb.org/t/p/w500/${props.backdrop}`}
            alt="Card image"
          />
          <Card.ImgOverlay
            style={{
              background:
                "linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3))"
            }}
          >
            <Card.Title style={{ fontWeight: "bolder" }}>
              {props.title}
            </Card.Title>
            <Card.Body>{props.body}</Card.Body>
            <Button
              variant="warning"
              style={{ width: "30%", margin: "0 auto 3% auto" }}
              onClick={() => props.clicked(props.id)}
            >
              Detail
            </Button>
          </Card.ImgOverlay>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default FilmBlock;
