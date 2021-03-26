import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    alignItems: "center",
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
    borderWidth: "2px",
  },
  Button: {
    margin: theme.spacing(2),
  },
}));
