import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Button, ListItem, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  item: {
    display: "flex",
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightMedium,
    justifyContent: "flex-start",
    letterSpacing: 0,
    padding: "10px 8px",
    textTransform: "none",
    width: "100%"
  },
  icon: {
    marginRight: theme.spacing(1),
    color: "rgb(242, 101, 34)"
  },
  title: {
    marginRight: "auto"
  },
  active: {
    color: theme.palette.primary.main,
    "& $title": {
      fontWeight: theme.typography.fontWeightMedium
    },
    "& $icon": {
      color: theme.palette.primary.main
    }
  }
}));

const NavItem = ({
  className,
  icon: Icon,
  title,
  setContents,
  index,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <ListItem
      className={clsx(classes.item, className)}
      disableGutters
      {...rest}
    >
      <Button
        activeClassName={classes.active}
        className={classes.button}
        onClick={() => setContents(index)}
      >
        {Icon && <Icon className={classes.icon} size="20" />}
        <span className={classes.title}>{title}</span>
      </Button>
    </ListItem>
  );
};

NavItem.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.elementType,
  title: PropTypes.string
};

export default NavItem;
