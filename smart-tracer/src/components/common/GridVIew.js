import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import img from "../../assets/svg/avatar.jpg";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import SnackbarContent from "@material-ui/core/SnackbarContent";

const useStyles = makeStyles(theme => ({
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
    },
    warning: {}
}));

function GridVIew(props) {
    const classes = useStyles();
    const { customers } = props || [];
    console.log(props, "from grid");
    return (
        <div>
            {customers ? (
                customers.map(customer => (
                    <Paper className={classes.customer} key={customer._id}>
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
                ))
            ) : (
                <SnackbarContent
                    className={classes.warning}
                    aria-describedby="client-snackbar"
                    message={
                        <span id="client-snackbar" className={classes.message}>
                            Sorry , We didn't found any data
                        </span>
                    }
                />
            )}
        </div>

        //     <Paper className={classes.root}>
        //     <Table className={classes.table} aria-label="simple table">
        //       <TableHead>
        //         <TableRow>
        //           <TableCell>Dessert (100g serving)</TableCell>
        //           <TableCell align="right">Calories</TableCell>
        //           <TableCell align="right">Fat&nbsp;(g)</TableCell>
        //           <TableCell align="right">Carbs&nbsp;(g)</TableCell>
        //           <TableCell align="right">Protein&nbsp;(g)</TableCell>
        //         </TableRow>
        //       </TableHead>
        //       <TableBody>
        //         { users ? users.map(user => (
        //           <TableRow key={user._id}>
        //             <TableCell component="th" scope="row">
        //               {user.name}
        //             </TableCell>
        //             <TableCell align="right">{user.address}</TableCell>
        //           </TableRow>
        //         )) : (
        //             <span>adask;dkas</span>
        //         )}
        //       </TableBody>
        //     </Table>
        //   </Paper>
    );
}

export default GridVIew;
