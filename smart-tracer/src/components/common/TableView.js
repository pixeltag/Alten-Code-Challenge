import React from "react";
import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useTranslation } from 'react-i18next';

function TableView(props) {
    const { t } = useTranslation();
    const { vehicles } = props || [];

    return (
        <div>
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>{t("mark")}</TableCell>
                            <TableCell align="right">{t("model")}</TableCell>
                            <TableCell align="right">{t("vehicleId")}</TableCell>
                            <TableCell align="right">{t("regNum")}</TableCell>
                            <TableCell align="right">{t("status")}</TableCell>
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
                                <TableCell align="right">
                                    {vehicle.status ? (
                                        <span className="status status-avaliable">{t("avaliable")}</span>
                                    ) : (
                                        <span className="status">{t("notAvaliable")}</span>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    );
}

TableView.propTypes = {
    vehicles : PropTypes.arrayOf(
        PropTypes.shape({
            lat : PropTypes.string.isRequired,
            long : PropTypes.string.isRequired,
            mark : PropTypes.string.isRequired,
            model : PropTypes.string.isRequired,
            reg_num : PropTypes.string.isRequired,
            status : PropTypes.bool.isRequired,
            user_id : PropTypes.number.isRequired,
            vehicle_id : PropTypes.string.isRequired,
            _id : PropTypes.number.isRequired
        })
    )
};

export default TableView;
