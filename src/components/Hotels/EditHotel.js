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
      <h1 className={classes.h1}>Edit Hotel Form</h1>
      <form>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="formGroupExampleInput">Hotel Name</label>
            <input
              type="text"
              class="form-control col-form-label-lg"
              id="formGroupExampleInput"
              placeholder="Hotel Name"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="formGroupExampleInput">Star</label>
            <input
              type="number"
              class="form-control col-form-label-lg"
              id="formGroupExampleInput"
              placeholder="Star Rating"
            />
          </div>
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput">City Name</label>
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
              type="text"
              class="form-control col-form-label-lg"
              id="formGroupExampleInput"
              placeholder="Latitude"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="formGroupExampleInput">Longitude</label>
            <input
              type="text"
              class="form-control col-form-label-lg"
              id="formGroupExampleInput"
              placeholder="Longitude"
            />
          </div>
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput">Hotel Intro</label>
          <input
            type="text"
            class="form-control col-form-label-lg"
            id="formGroupExampleInput"
            placeholder="Hotel Intro"
          />
        </div>
        <div class="form-group">
          <label for="validationTextarea">Hotel Description</label>
          <textarea
            class="form-control"
            id="Textarea"
            placeholder="Hotel Description"
            required
          ></textarea>
        </div>
        <div class="form-group">
          <label for="exampleFormControlFile1">Hotel Images</label>
          <input
            type="file"
            class="form-control-file"
            id="exampleFormControlFile1"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="inputState">Hotel Amenities</label>
          <select id="inputState" class="form-control">
            <option selected>Choose...</option>
            <option>Lifts</option>
            <option>Restaurant</option>
            <option>Park</option>
            <option>Swimming Pools</option>
            <option>Bike Paths</option>
            <option>Parking</option>
          </select>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputCity">City</label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div class="form-group col-md-4">
            <label for="inputState">State</label>
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="form-group col-md-2">
            <label for="inputZip">Zip</label>
            <input type="text" class="form-control" id="inputZip" />
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
