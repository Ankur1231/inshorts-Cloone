import React from "react";
import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import { Menu } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  themeMargin: {
    ...theme.mixins.toolbar,
    marginBottom: 40,
  },
  header: {
    backgroundColor: "white",
    height: 70,
  },
  logo: {
    height: 55,
    margin: "auto",
    paddingRight: 70,
  },
  menu: {
    color: "black",
  },
}));

const Header = () => {
  const classes = useStyles();
  const url =
    "https://assets.inshorts.com/website_assets/images/logo_inshorts.png";

  return (
    <>
      <AppBar className={classes.header}>
        <Toolbar>
          <Menu className={classes.menu} />
          <img src={url} alt="pic" className={classes.logo} />
        </Toolbar>
      </AppBar>
      <div className={classes.themeMargin} />
    </>
  );
};

export default Header;
