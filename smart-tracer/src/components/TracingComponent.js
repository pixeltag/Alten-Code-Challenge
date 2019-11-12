import React , { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import GridView from "./common/GridVIew";
import { useSelector , useDispatch } from "react-redux";
import { tracerConnect } from "../store/actions";


function TracingComponent(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    function getCustomersData() {
      dispatch(tracerConnect());
    }
    getCustomersData();
  } , []);
  const { customers } = useSelector(state => state.tracerReducer);

  console.log(customers)


  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} md={6}>
        map
      </Grid>
      <Grid item xs={12} md={6} className={classes.tracingContainer}>
      <Grid container component="main" alignContent="flex-start" className={classes.root} spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h5" className={classes.heading} gutterBottom>
            Found 13 Vehicles
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <GridView {...customers} />
        </Grid>
      </Grid>
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
