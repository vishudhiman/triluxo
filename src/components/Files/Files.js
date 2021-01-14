import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  container: {
    width: "800px",
    marginLeft: "20%",
    marginTop: "5%",
    boxSizing: "border-box",
  },
  h1: {
    marginLeft: "20%",
    fontWeight: "bold",
    textAlign: "center",
  },
});

const Files = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1 className={classes.h1}>Add File Form</h1>
      <form data-ng-init="resp()">
        <div class="form-group">
          <label for="formGroupExampleInput">Phone No</label>
          <input
            type="number"
            maxLength="10"
            class="form-control col-form-label-lg"
            id="formGroupExampleInput"
            placeholder="Enter Phone No"
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">File Name </label>
          <input
            type="text"
            class="form-control col-form-label-lg"
            id="formGroupExampleInput2"
            placeholder="Enter File Name"
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">File Url</label>
          <input
            type="text"
            class="form-control col-form-label-lg"
            id="formGroupExampleInput2"
            placeholder="Enter File Url"
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

export default Files;
