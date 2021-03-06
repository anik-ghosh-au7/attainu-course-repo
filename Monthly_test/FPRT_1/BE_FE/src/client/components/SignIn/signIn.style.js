import { makeStyles } from "@material-ui/core/styles";

// const rand = () => {
//   return Math.round(Math.random() * 20) - 10;
// };

export const getModalStyle = () => {
  const top = 50;
  const left = 50;

  return {
    top: `${top}vh`,
    left: `${left}vw`,
    transform: `translate(-${top}%, -${left}%)`,
  };
};

export const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
