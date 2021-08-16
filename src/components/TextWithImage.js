import { Grid, makeStyles } from "@material-ui/core";
import logo from "../logo.svg";

const useStyles = makeStyles((theme) => ({}));
export function TextWithImage(props) {
  const classes = useStyles();
  return (
    <Grid container direction="row" alignItems="center">
      <Grid item xs>
        <img src={logo} alt="This is an Image" />
      </Grid>
      <Grid item xs>
        <img src={logo} alt="This is an Image" />
      </Grid>
    </Grid>
  );
}
