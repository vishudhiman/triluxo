import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    width: "800px",
    marginLeft: "20%",
    marginTop: "3%",
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
      <h1 className={classes.h1}>Attractions</h1>
      <form>
        <div class="form-group">
          <label for="formGroupExampleInput">Name</label>
          <input
            type="text"
            class="form-control col-form-label-lg"
            id="formGroupExampleInput"
            placeholder="Name"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlFile1">Images</label>
          <input
            type="file"
            class="form-control-file"
            id="exampleFormControlFile1"
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput">About</label>
          <input
            type="text"
            class="form-control col-form-label-lg"
            id="formGroupExampleInput"
            placeholder="About"
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput">City</label>
          <input
            type="text"
            class="form-control col-form-label-lg"
            id="formGroupExampleInput"
            placeholder="City Name"
          />
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="formGroupExampleInput">Latitude</label>
            <input
              type="number"
              class="form-control col-form-label-lg"
              id="formGroupExampleInput"
              placeholder="Latitude"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="formGroupExampleInput">Longitude</label>
            <input
              type="number"
              class="form-control col-form-label-lg"
              id="formGroupExampleInput"
              placeholder="Longitude"
            />
          </div>
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
