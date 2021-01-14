import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  container: {
    width: "80%",
    marginLeft: "18%",
    marginTop: "5%",
    boxSizing: "border-box",
  },
  Cards: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "3%",
  },
});
const Cards = () => {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <div class="card-body">
        <h5 class="card-title">File Name</h5>
        <h6 class="card-subtitle mb-2 text-muted">Phone No</h6>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <Link to="#" class="card-link">
          Download
        </Link>
      </div>
    </div>
  );
};

const AllFiles = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div>
        <div class="row">
          <div class="col-md-12">
            <form class="form-inline">
              <div class="flex-fill mr-2">
                <input
                  type="search"
                  name="search"
                  id="search"
                  value=""
                  placeholder="Search..."
                  class="form-control w-100"
                />
              </div>
              <input
                type="submit"
                name="commit"
                value="Search"
                class="btn btn-primary"
                data-disable-with="Search"
              />
            </form>
          </div>
        </div>
      </div>
      <div className={classes.Cards}>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
};

export default AllFiles;
