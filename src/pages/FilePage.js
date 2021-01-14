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
  // "@media (min-width:320px": {
  //   container: {
  //     width: "auto",
  //     marginLeft: "5%",
  //     marginTop: "5%",
  //   },
  // },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className="card">
        <img className="card-img-top" src="" alt="" />
        <div className="card-body">
          <h5 className="card-title">Add File</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to="/files/addFile" className="btn btn-primary">
            Add Files
          </Link>
        </div>
      </div>
      <div className="card">
        <img className="card-img-top" src="" alt="" />
        <div className="card-body">
          <h5 className="card-title">All Files</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to="/files/viewFiles" className="btn btn-primary">
            All Files
          </Link>
        </div>
      </div>
    </div>
  );
}
