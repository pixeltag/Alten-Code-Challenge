import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import TracingGrid from "./TracingGrid";

function TracingComponent(props) {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} md={6}>
        map
      </Grid>
      <Grid item xs={12} md={6} className={classes.tracingContainer}>
        <TracingGrid />
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  tracingContainer: {
    padding: theme.spacing(4)
  }
}));

export default TracingComponent;
