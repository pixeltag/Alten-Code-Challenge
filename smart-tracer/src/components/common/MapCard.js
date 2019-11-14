import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    card: {
      minWidth: 250,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 15,
      color: theme.palette.colors.secondary
    },
    address: {
        fontSize:"12px",
        borderBottom:`1px solid ${theme.palette.colors.darkDefault}`,
        paddingBottom:"3px"
    },
    pos: {
      marginBottom: 5,
      fontWeight:'bold'
    },
    reg: {
        textAlign:'center',
        backgroundColor:theme.palette.colors.default,
        margin: "5px 0 10px 0"
    },
    center: {
        textAlign:'center'
    }
}));

function MapCard(props) {

    const { vehicle } = props.card || {};

    const classes = useStyles();
    const { card } = props || {};
    return (
        <Card className={classes.card}>
        <CardContent className={classes.noPadding}>
          <Typography component="p" className={classes.title} >{card.name}</Typography>
          <Typography  color="textSecondary" className={classes.address} gutterBottom>{card.address}</Typography>
          <Typography className={classes.pos} component="h5">{vehicle.mark}</Typography>
          <Typography variant="body2" component="p">{vehicle.model}</Typography>
          <Typography variant="body2" component="p">{vehicle.vehicle_id}</Typography>
          <Typography variant="h6" className={classes.reg}>{vehicle.reg_num}</Typography>
          <div className={classes.center}>
            {vehicle.status ? (
                    <span className="status status-avaliable">avaliable</span>
                ) : (
                    <span className="status">Not Avaliable</span>
                )}
          </div>
        </CardContent>
      </Card>
    )
}

MapCard.propTypes = {
  card : PropTypes.shape({
    address : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    vehicle : PropTypes.shape({
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
  })
}

export default MapCard

