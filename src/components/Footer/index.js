import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    textAlign: "center",
    position: "absolute",
    bottom: "0",
    width: "100% !important",
    height: "100px !important",
    background: "black",
  },
  colorText: {
    color: "#5AFF3D",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Typography variant="title">
        tri<span className={classes.colorText}>luxo.</span>
      </Typography>
    </div>
  );
}
