import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    alignItems: "center",
    width: "100%",
    paddingBottom: "10%",
    paddingTop: "10%",
  },
  title: {
    margin: theme.spacing(2),
    fontSize: "1.5rem",
    fontWeight: 700,
    [theme.breakpoints.up("sm")]: {
      fontSize: "2rem",
    },
  },
  TextFields: {
    margin: theme.spacing(2),
    fontWeight: 500,
    borderWidth: "4px",
    [theme.breakpoints.up("md")]: {
      width: "30%",
    },
  },
  Button: {
    margin: theme.spacing(2),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
  },
  container: {
    margin: theme.spacing(4),
    width: "auto",
  },
}));
