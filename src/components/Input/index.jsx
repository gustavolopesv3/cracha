import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#404759",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#404759",
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  input: {
    width: "100%",
  },
}));

export default function Input(props) {
  const { name, id, label, onChange, value, required } = props;
  const classes = useStyles();

  return (
    <CssTextField
      className={classes.input}
      name={name}
      id={id}
      label={label}
      onChange={onChange}
      value={value}
      required={required}
    />
  );
}
