import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import GridView from "./common/GridVIew";
import { useSelector, useDispatch } from "react-redux";
import { tracerConnect } from "../store/actions";
import { combineCustomersWithVehicles, getVehiclesNum } from "../lib/utils";
import DriveEtaIcon from "@material-ui/icons/DriveEta";

function TracingComponent(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        function getCustomersData() {
            dispatch(tracerConnect());
        }
        getCustomersData();
    }, []);
    const { customers } = useSelector(state => state.tracerReducer);
    const { vehicles } = useSelector(state => state.tracerReducer);

    const combined = combineCustomersWithVehicles(customers, vehicles);
    const numOfVehicles = getVehiclesNum(combined);

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={12} md={6}>
                map
            </Grid>
            <Grid item xs={12} md={6} className={classes.tracingContainer}>
                <Grid container component="main" alignContent="flex-start" className={classes.root} spacing={4}>
                    <Grid item xs={12}>
                        <DriveEtaIcon className={classes.carIcon} />
                        <span className={classes.heading}>Found {numOfVehicles} Vehicles</span>
                    </Grid>
                    <Grid item xs={12}>
                        <GridView customers={combined} />
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
    },
    heading: {
        fontWeight: "600",
        fontSize: "18px",
        verticalAlign: "middle"
    },
    carIcon: {
        marginRight: theme.spacing(1),
        fill: theme.palette.colors.secondary,
        verticalAlign: "middle",
        width: "1.2em",
        height: "1.2em"
    }
}));

export default TracingComponent;
