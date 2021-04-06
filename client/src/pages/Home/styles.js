import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  Button: {
    fontSize: 13,
    margin: theme.spacing(2),
    padding: theme.spacing(1),
    background:
      "linear-gradient(to left,rgba(36, 31, 31, 1) 0%,rgba(36, 31, 31, 1) 32%,rgba(74, 71, 70, 1) 100%)",
    boxShadow: "0 3px 5px 2px rgba(255, 235, 235, .8)",
    [theme.breakpoints.up("sm")]: {
      fontSize: 18,
      margin: theme.spacing(4),
      padding: theme.spacing(2),
    },
  },
}));
