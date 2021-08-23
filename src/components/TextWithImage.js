import { Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    background: theme.palette.primary.dark,
    color: theme.palette.secondary.dark,
    padding: "4vw",
  },
  img: {
    width: "100%",
    height: "auto",
  },
}));

const Description = (props) => {
  return (
    <Grid item xs>
      <Typography variant="body1">{props.description}</Typography>
    </Grid>
  );
};

const TextToTheRight = (props) => {
  return (
    <Grid container direction="row" justify="space-around" alignItems="center">
      <Grid item xs={4}>
        <img
          className={props.classes.img}
          src={props.content.img}
          alt="amazing images for a test that i'm making"
        />
      </Grid>
      <Grid item xs={4}>
        <Grid container direction="column" alignItems="center" spacing={3}>
          <Grid item xs>
            <Typography variant="h6">{props.content.title}</Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="body1">
              <b>{props.content.subTitle}</b>
            </Typography>
          </Grid>
          {props.content.descriptions.map((description) => (
            <Description description={description} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

const TextToTheLeft = (props) => {
  return (
    <Grid container direction="row" justify="space-around" alignItems="center">
      <Grid item xs={4}>
        <Grid container direction="column" alignItems="center" spacing={3}>
          <Grid item xs>
            <Typography variant="h6">{props.content.title}</Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="body1">
              <b>{props.content.subTitle}</b>
            </Typography>
          </Grid>
          {props.content.descriptions.map((description) => (
            <Description description={description} />
          ))}
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <img
          className={props.classes.img}
          src={props.content.img}
          alt="amazing images for a test that i'm making"
        />
      </Grid>
    </Grid>
  );
};

export function TextWithImage(props) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {props.TextToTheRight ? (
        <TextToTheRight classes={classes} content={props.content} />
      ) : (
        <TextToTheLeft classes={classes} content={props.content} />
      )}
    </div>
  );
}
