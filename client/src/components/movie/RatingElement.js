import React from "react";
import PropTypes from "prop-types";
import { Rating } from "semantic-ui-react";

const RatingElement = props => (
  <div>
    <Rating
      clearable
      rating={props.ratingnum}
      maxRating={props.maxRating}
      onRate={(event, data) =>
        props.onRate({
          rating: {
            ratingnum: data.rating,
            ratingtext: props.ratingOptions[data.rating].value,
            ratingdescription: props.ratingOptions[data.rating].description,
            ratingid: props.ratingOptions[data.rating].id,
          },
        })}
    />
    {props.ratingnum}: {(props.ratingOptions[props.ratingnum] &&
                            props.ratingOptions[props.ratingnum].description) || "ERROR"}
  </div>
);

RatingElement.propTypes = {
  maxRating: PropTypes.number.isRequired,
  ratingOptions: PropTypes.array.isRequired,
  onRate: PropTypes.func.isRequired,
  ratingnum: PropTypes.number.isRequired,
};

export default RatingElement;
