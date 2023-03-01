import React, {forwardRef, useState} from "react";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";
import { Box, MenuItem, Select, TextField } from "@mui/material";


const NumberFormatCustom = forwardRef(function NumberFormatCustom(
  props,
  ref
) {
  const { onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
    />
  );
});

NumberFormatCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const FormattedInput = ({ numberformat, setNumberformat }) => {
   
  console.log(numberformat);
  const handleChange = (event) => {
    setNumberformat(event.target.value);
  };
  console.log(numberformat)

  return (
 <>
      <TextField
        label="Price"
        value={ numberformat}
        onChange={handleChange}
        name="price"
        id="price"
        InputProps={{
          inputComponent: NumberFormatCustom,
        }}
        variant="outlined"
      fullWidth
      />
  
    </>
   
  );
};

export default FormattedInput;
