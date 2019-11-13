import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({}));

function TableView(props) {
    const classes = useStyles();
    const { vehicles } = props || [];

    return (
        <div>
            <Paper className={classes.root}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>mark</TableCell>
                            <TableCell align="right">Model</TableCell>
                            <TableCell align="right">Vehicle ID</TableCell>
                            <TableCell align="right">Reg Num</TableCell>
                            <TableCell align="right">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {vehicles.map(vehicle => (
                            <TableRow key={vehicle._id}>
                                <TableCell component="th" scope="row">
                                    {vehicle.mark}
                                </TableCell>
                                <TableCell align="right">{vehicle.model}</TableCell>
                                <TableCell align="right">{vehicle.vehicle_id}</TableCell>
                                <TableCell align="right">{vehicle.reg_num}</TableCell>
                                <TableCell align="right">{vehicle.status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    );
}

TableView.propTypes = {};

export default TableView;
