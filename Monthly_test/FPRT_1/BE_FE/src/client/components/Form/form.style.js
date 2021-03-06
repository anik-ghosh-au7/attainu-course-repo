import { fade, makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    height: "100%",
    background: fade(theme.palette.primary.main, 0.6),
    margin: "0 50%",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  list_container: {
    padding: "20px 10px",
    margin: "5px 30px 5px 10px",
    "&:hover": {
      transform: "scale(1.05, 1.05)",
    },
    cursor: "pointer",
  },
  notebook: {
    padding: "20px 0",
    margin: "40px 0 0 0",
    minHeight: "76.8vh",
    width: "91.6vw",
  },
  buttons: {
    position: "absolute",
    top: "100%",
  },
  submit: {
    margin: theme.spacing(0, 0, 2),
    padding: 0,
  },
  page_icons: {
    fontSize: 40,
    color: fade(theme.palette.common.black, 0.3),
  },
  copyright: {
    textAlign: "center",
    marginBottom: "30%",
  },
}));
export default useStyles;
