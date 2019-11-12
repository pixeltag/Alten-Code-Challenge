import React from "react";
import GridFilter from "./common/GridFilters";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  heading: {
    borderBottom: `1px solid #D1D1D1`
  }
}));

function TracingGrid(props) {
  const classes = useStyles();
  const { users = [] } = props || [];
  console.log(users, "from grid");
  return (
    <Grid container component="main" className={classes.root} spacing={4}>
      <Grid item xs={12}>
        <GridFilter />
        <Typography variant="h5" className={classes.heading} gutterBottom>
          Found 13 Vehicles
        </Typography>
      </Grid>
    </Grid>
  );
}

export default TracingGrid;
