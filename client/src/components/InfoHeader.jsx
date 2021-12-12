import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    backgroundColor: "#f44336",
    color: "white",
    height: 48,
    display: "flex",
    alignItems: "center",
    marginBottom: 15,
  },
  text: {
    fontSize: 14,
    marginLeft: 50,
    fontWeight: 300,
  },
  logo: {
    paddingTop: 5,
    height: 35,
    "&:last-child": {
      margin: "0 50px 0 20px",
    },
  },
});

const InfoHeader = () => {
  const classes = useStyles();
  const appleStore =
    "https://assets.inshorts.com/website_assets/images/appstore.png";
  const googleStore =
    "https://assets.inshorts.com/website_assets/images/playstore.png";

  return (
    <Box className={classes.container}>
      <Typography className={classes.text}>
        For the best experience use the <b>inshorts</b> app on your smartphone
      </Typography>
      <box style={{ marginLeft: "auto" }}>
        <img src={googleStore} className={classes.logo} alt="google" />
        <img src={appleStore} className={classes.logo} alt="apple" />
      </box>
    </Box>
  );
};

export default InfoHeader;
