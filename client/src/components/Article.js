import React from "react";
import {
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  image: {
    height: 268,
    width: "88%",
    borderRadius: 5,
    objectFit: "cover",
  },
  component: {
    marginBottom: 20,
    boxShadow: "0 2px 5px 0",
  },
  container: {
    padding: 8,
    paddingBottom: "4px!important",
  },
  rightContainer: {
    margin: "5px 0 0 -25px",
  },
});

const Article = ({ article }) => {
  const classes = useStyles();

  return (
    <Card className={classes.component}>
      <CardContent className={classes.container}>
        <Grid container>
          <Grid item lg={5} md={5} sm={5} xs={12}>
            <img src={article.url} alt="pic" className={classes.image} />
          </Grid>
          <Grid
            item
            lg={7}
            md={7}
            sm={7}
            xs={12}
            className={classes.rightContainer}
          >
            <Typography>{article.title}</Typography>
            <Typography>
              <b>shorts</b> by {article.author}/{" "}
              {new Date(article.timestamp).toDateString()}{" "}
            </Typography>
            <Typography>{article.description}</Typography>
            <Typography>
              read more at{" "}
              <a href={article.link} target="_blank">
                {article.publisher}
              </a>{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Article;
