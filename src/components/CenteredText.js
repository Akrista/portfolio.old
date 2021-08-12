import { Grid, Typography } from "@material-ui/core";

export function CenteredText() {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Typography variant="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam maximus
        nec elit sit amet hendrerit. Maecenas porttitor sem ut sollicitudin
        sagittis. Nunc placerat suscipit lacus, a molestie mi pharetra id.
        Aliquam et porta arcu. Sed rutrum euismod arcu, quis gravida felis
        commodo hendrerit. Integer et ornare velit. Suspendisse augue libero,
        tincidunt eget sem nec, efficitur mollis massa. Phasellus at est vitae
        est porttitor rutrum. Nunc finibus scelerisque ullamcorper.
      </Typography>
    </Grid>
  );
}
