import React from "react";
import Stars from "./Stars";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";

export default function MoviesList(props) {
  return (
    <div className="row list-container">
      { props.movieListe.map( (e, i) => (
        <Card className="col-md-4" key={i}>
          <div className="containerRating litse-movies-rate">
            <Stars starsRating={e.nbStar} />
          </div>
          <CardImg
            top
            width="auto"
            height='108'
            src={e.image}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>
              {e.name} - {e.date}
            </CardTitle>
          </CardBody>
        </Card>
      )
    ) }
    </div>
  );
}
