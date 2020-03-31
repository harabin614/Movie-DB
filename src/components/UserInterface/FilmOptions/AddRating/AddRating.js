import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";
import classes from "./AddRating.module.css";

const AddRating = props => {
  const [rating, setRating] = useState(0);
  const onStarClick = nextValue => {
    setRating(nextValue);
  };

  return (
    <div className={classes.Stars}>
      <Card onMouseLeave={() => props.close(null, false)}>
        <StarRatingComponent
          name="rate film"
          starCount={10}
          value={rating}
          onStarClick={onStarClick.bind(this)}
        />
        <Button variant="warning" onClick={() => props.close(rating, false)}>
          Send
        </Button>
      </Card>
    </div>
  );
};
export default React.memo(AddRating);
