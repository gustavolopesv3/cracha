import React from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles, makeStyles } from "@material-ui/core/styles";

/*
const currencies = [
  {
    value: "USD",
    label: "Selecione uma opção...",
  },
];
*/

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

export default function Selected(props) {
  const { name, id, label, onChange, value, currencies, required } = props;
  const classes = useStyles();

  return (
    <CssTextField
      className={classes.input}
      name={name}
      id={id}
      select
      label={label}
      value={value}
      onChange={onChange}
      required={required}
      SelectProps={{
        native: true,
      }}
    >
      {currencies.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </CssTextField>
  );
}
