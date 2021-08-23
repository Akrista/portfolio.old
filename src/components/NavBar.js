import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography color="secondary" variant="h6" className={classes.title}>
            Jorge Thomas
          </Typography>
          <Button color="secondary">Acerca de Mi</Button>
          <Button color="secondary">Proyectos</Button>
          <Button color="secondary">Contáctame</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
