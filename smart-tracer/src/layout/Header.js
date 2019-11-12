import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../assets/svg/logo.svg';
import Public from '@material-ui/icons/Public'
import Fullscreen from '@material-ui/icons/Fullscreen'

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: 'none',
    },
  },
  appBar: {
    background: '#fff',
    borderBottom: `2px solid ${theme.palette.colors.secondary}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
    background: theme.palette.colors.default,
    color: theme.palette.colors.black,
    border: '0',
    "&:hover, &:focus": {
      border: '0',
      background: theme.palette.colors.darkDefault,
      color: theme.palette.colors.secondary,
    }
  },
  btnIcon: {
    marginRight: theme.spacing(1),
    fill: theme.palette.colors.secondary
  },
  logo: {
    width: '315px',
    height: '31px',
    verticalAlign: 'middle',
  }

}));

export default function Header() {

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="primary" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            <img alt='Smart Tracer' className={classes.logo} src={logo} />
          </Typography>
          <nav>
            <Button href="#" color="primary" variant="outlined" className={classes.link}>
              <Fullscreen className={classes.btnIcon} />
              Full Screen
            </Button>
            <Button href="#" color="primary" variant="outlined" className={classes.link}>
              <Public className={classes.btnIcon} />
              SE
            </Button>
          </nav>
        </Toolbar>
      </AppBar> 
    </React.Fragment>
  );
}