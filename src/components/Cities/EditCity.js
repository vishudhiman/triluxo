import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    width: "800px",
    marginLeft: "20%",
    marginTop: "5%",
  },
  h1: {
    marginLeft: "20%",
    fontWeight: "bold",
    textAlign: "center",
  },
});

const AddCity = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1 className={classes.h1}>Edit City Form</h1>
      <form>
        <div class="form-group">
          <label for="formGroupExampleInput">City Name</label>
          <input
            type="text"
            class="form-control col-form-label-lg"
            id="formGroupExampleInput"
            placeholder="Enter City Name"
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Latitude</label>
          <input
            type="number"
            class="form-control col-form-label-lg"
            id="formGroupExampleInput2"
            placeholder="Enter Latitude"
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Longitude</label>
          <input
            type="number"
            class="form-control col-form-label-lg"
            id="formGroupExampleInput2"
            placeholder="Enter Longitude"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
        <button type="submit" class="btn btn-danger">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddCity;
