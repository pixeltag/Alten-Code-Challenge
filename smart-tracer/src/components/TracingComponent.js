import React, { useEffect , useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import GridView from "./common/GridVIew";
import { useSelector, useDispatch } from "react-redux";
import { tracerConnect } from "../store/actions";
import { combineCustomersWithVehicles, getVehiclesNum , filterByCustomer , filterByStatus } from "../lib/utils";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import GridFilter from "./common/GridFilters";
import StatusSwitcher from "./common/StatusSwitcher";
import TracerMap from "./common/TracerMap";

function TracingComponent(props) {
    const classes = useStyles();

    const [selectedCustomers , setSelectedCustomers] = useState([])
    const [vehiclesStatus , setvehiclesStatus] = useState(false)

    const dispatch = useDispatch();
    // get the updating data from the server
    useEffect(() => {
        function getCustomersData() {
            dispatch(tracerConnect());
        }
        getCustomersData();
    }, []);

    const { customers } = useSelector(state => state.tracerReducer);
    const { vehicles } = useSelector(state => state.tracerReducer);

    // handle on select event
    const handleOnSelect = event => {
        setSelectedCustomers(event);
    }
    // handle on status changes
    const handleSwitch = event => {
        setvehiclesStatus(event)
    }

    let combine =  combineCustomersWithVehicles(customers, vehicles);

    const customerFilter = (data) => {

        let updatedCustomers = data;

        if(selectedCustomers.length > 0) {
            updatedCustomers = filterByCustomer(updatedCustomers , selectedCustomers);
        }

        if(vehiclesStatus) {
            updatedCustomers = filterByStatus(updatedCustomers , vehiclesStatus);
        }
        // let status = filterByStatus(vehicles , vehiclesStatus);
        return updatedCustomers;
    }

    const returnedData = customerFilter(combine);
    const numOfVehicles = getVehiclesNum(returnedData);

    return (
        <div>
            {
                customers.length > 0 ? (
                    <Grid container component="main" className={classes.root}>
                        <CssBaseline />
                                <Grid item xs={12} md={6}>
                                    <TracerMap customers={returnedData}/>
                                </Grid>
                                <Grid item xs={12} md={6} className={classes.tracingContainer}>
                                    <Grid container component="main" alignContent="flex-start" className={classes.root} spacing={4}>
                                        <Grid item xs={10}>
                                            <GridFilter customers={customers} onSelect={handleOnSelect} placeholder="Select Customer"/>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <StatusSwitcher switchLabel="Status" onSwitch={handleSwitch} />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <DriveEtaIcon className={classes.carIcon} />
                                            <span className={classes.heading}>Found {numOfVehicles} Vehicles</span>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <GridView customers={returnedData} />
                                        </Grid>
                                    </Grid>
                                </Grid>

                    </Grid>
                ) : (
                    <span>no data</span>
                )
            }
        </div>
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
