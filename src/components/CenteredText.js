import { Grid, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    background: theme.palette.primary.light,
    color: theme.palette.secondary.dark,
    padding: "4vw",
  },
}));

export function CenteredText() {
  const classes = useStyles();

  return (
    <Grid
      className={classes.container}
      container
      direction="column"
      justifyContent="space-around"
      alignItems="center"
    >
      <Grid item>
        <Typography variant="body1" aligh="center" gutterBottom="true">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          maximus nec elit sit amet hendrerit. Maecenas porttitor sem ut
          sollicitudin sagittis. Nunc placerat suscipit lacus, a molestie mi
          pharetra id. Aliquam et porta arcu. Sed rutrum euismod arcu, quis
          gravida felis commodo hendrerit. Integer et ornare velit. Suspendisse
          augue libero, tincidunt eget sem nec, efficitur mollis massa.
          Phasellus at est vitae est porttitor rutrum. Nunc finibus scelerisque
          ullamcorper.
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1" aligh="center" gutterBottom="true">
          <b>
            Pellentesque sed dui tristique, venenatis nisl quis, viverra nibh.
            Curabitur porta, arcu non tempus sollicitudin, tortor tellus
            faucibus mi, vel maximus nulla lorem eget urna. Quisque malesuada
            justo turpis, ultrices vestibulum nibh condimentum sit amet. Duis
            ullamcorper varius turpis, eget porttitor nibh gravida in. Nulla
            facilisi. Ut ligula tellus, malesuada sit amet ex a, lacinia lacinia
            risus. Integer mollis felis nisl, vitae rhoncus velit vestibulum
            vitae. Mauris rhoncus leo nec lacus auctor egestas. Suspendisse ac
            enim quis eros gravida tincidunt. Praesent tristique nulla vel
            tortor scelerisque, sed tincidunt magna pulvinar. Ut vel orci a
            libero facilisis mollis nec eget augue. Sed vitae consectetur diam.
            Mauris volutpat aliquet volutpat. Vestibulum dapibus ornare urna at
            finibus.
          </b>
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1" aligh="center" gutterBottom="true">
          Ut consectetur, tellus et placerat semper, tellus libero gravida nunc,
          ac consectetur lorem nulla id elit. Quisque lobortis sed mauris at
          dictum. Ut vel euismod sem, ac dapibus magna. Aliquam facilisis dui
          facilisis tincidunt pellentesque. Cras tempus id justo in suscipit.
          Mauris sit amet efficitur risus. Proin semper molestie dolor, in
          facilisis neque fringilla ut. Maecenas luctus congue gravida.
          Vestibulum commodo fermentum orci id feugiat. Etiam ac magna at nunc
          cursus egestas consectetur sit amet ex.
        </Typography>
      </Grid>
    </Grid>
  );
}
