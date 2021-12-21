import React from "react";
//import MuiTextField from "@material-ui/core/TextField";
import { fieldToTextField } from "formik-material-ui";

import PhoneInput from "react-phone-input-2";
//import 'react-phone-input-2/lib/style.css'
import "react-phone-input-2/lib/material.css";
import { makeStyles } from "@material-ui/core";

const phoneStyle = makeStyles((theme) => ({
  containerClass: {
    marginTop: (props) => (props.margin === "dense" ? theme.spacing(1) : 0),
    marginBottom: (props) =>
      props.margin === "dense" ? theme.spacing(0.5) : 0,
    "& .form-control": {
      fontSize: 16,
      border: "1px solid #CACACA",
      borderRadius: "5px",
      width: (props) => (props.fullWidth ? "100%!important" : ""),
      outline: "none",
      padding: (props) =>
        props.margin === "dense"
          ? "10px 14px 10px 58px !important"
          : "18.5px 14px 18.5px 58px !important",
      transition: "box-shadow ease .25s,border-color ease .25s"
    }
  }
}));

function Custom(props) {
  const classes = phoneStyle(props);
  const {
    form: { setFieldValue },
    field: { name }
  } = props;
  const onChange = React.useCallback(
    (value) => {
      setFieldValue(name, value ? value : "");
    },
    [setFieldValue, name]
  );

  return (
    <PhoneInput
      containerClass={classes.containerClass}
      country={"in"}
      {...fieldToTextField(props)}
      onChange={onChange}
      inputProps={{
        // name: name,
        // id: name
      }}
    />
  );
  //return <MuiTextField {...fieldToTextField(props)} onChange={onChange} />;
}
export default Custom;
