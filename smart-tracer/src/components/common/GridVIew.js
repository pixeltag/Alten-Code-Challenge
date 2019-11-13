import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import img from "../../assets/svg/avatar.jpg";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import TableView from "./TableView";

const useStyles = makeStyles(theme => ({
    customerContainer: {
        marginBottom: theme.spacing(3)
    },
    customer: {
        width: "100%",
        overflowX: "auto",
        backgroundColor: theme.palette.colors.default,
        borderRadius: "0",
        padding: theme.spacing(1),
        boxShadow: "0",
        borderBottom: `2px solid ${theme.palette.colors.secondary}`
    },
    avatar: {
        float: "left",
        margin: "3px 15px 0px 10px",
        width: 55,
        height: 55
    },
    CustomerName: {
        color: theme.palette.colors.secondary
    },
    CustomerAddress: {
        colot: "#747474"
    },
    carIcon: {
        marginRight: theme.spacing(1),
        fill: theme.palette.colors.secondary,
        verticalAlign: "middle",
        width: "1.2em",
        height: "1.2em"
    },
    table: {
        minWidth: 650
    },
    numOfCars: {
        textAlign: "right",
        padding: theme.spacing(2)
    },
    carText: {
        fontSize: "17px",
        fontWeight: 500,
        verticalAlign: "middle"
    }
}));

function GridVIew(props) {
    const classes = useStyles();
    const { customers } = props || [];
    console.log(props, "from grid");
    return (
        <div>
            {customers ? (
                customers.map(customer => (
                    <div key={customer._id} className={classes.customerContainer}>
                        <Paper className={classes.customer}>
                            <Grid container component="main" className={classes.root}>
                                <Grid item xs={12} md={8}>
                                    <Avatar alt="Remy Sharp" src={img} className={classes.avatar} />
                                    <Typography variant="h6" className={classes.CustomerName}>
                                        {customer.name}
                                    </Typography>
                                    <Typography variant="subtitle1" className={classes.CustomerAddress}>
                                        {customer.address}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={4} className={classes.numOfCars}>
                                    <DriveEtaIcon className={classes.carIcon} />
                                    <span className={classes.carText}>{customer.vehicles.length} Vehicles</span>
                                </Grid>
                            </Grid>
                        </Paper>
                        <TableView vehicles={customer.vehicles} />
                    </div>
                ))
            ) : (
                <SnackbarContent
                    aria-describedby="client-snackbar"
                    message={
                        <span id="client-snackbar" className={classes.message}>
                            Sorry , We didn't found any data
                        </span>
                    }
                />
            )}
        </div>
    );
}

export default GridVIew;
