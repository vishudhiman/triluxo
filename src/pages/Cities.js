import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    width: "700px",
    display: "grid",
    gridTemplateRows: "repeat(3,1fr)",
    gridGap: "10px",
    marginLeft: "20%",
    marginTop: "10px",
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className="card">
        <img className="card-img-top" src="" alt="" />
        <div className="card-body">
          <h5 className="card-title">Add City</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to="/cities/addcity" className="btn btn-primary">
            Add City
          </Link>
        </div>
      </div>
      <div className="card">
        <img className="card-img-top" src="" alt="" />
        <div className="card-body">
          <h5 className="card-title">Edit City</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to="/cities/editcity" className="btn btn-primary">
            Edit City
          </Link>
        </div>
      </div>
      <div className="card">
        <img className="card-img-top" src="" alt="" />
        <div class="card-body">
          <h5 class="card-title">View Cities</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to="/cities/viewCities" className="btn btn-primary">
            View Cities
          </Link>
        </div>
      </div>
    </div>
  );
}
