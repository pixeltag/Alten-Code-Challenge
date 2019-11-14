import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
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
    const classes = useStyles();
    const { card } = props || {};
    console.log(card.vehicle , 'card')
    return (
        <Card className={classes.card}>
        <CardContent className={classes.noPadding}>
          <Typography component="p" className={classes.title} >
            {card.name}
          </Typography>
          <Typography  color="textSecondary" className={classes.address} gutterBottom>
            {card.address}
          </Typography>
          <Typography className={classes.pos} component="h5">
            {card.vehicle.mark}
          </Typography>
          <Typography variant="body2" component="p">
          {card.vehicle.model}
          </Typography>
          <Typography variant="body2" component="p">
          {card.vehicle.vehicle_id}
          </Typography>
          <Typography variant="body2" variant="h6" className={classes.reg}>
          {card.vehicle.reg_num}
          </Typography>
          <div className={classes.center}>
            {card.vehicle.status ? (
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

}

export default MapCard

