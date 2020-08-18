import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Input, Label } from "reactstrap";

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
};

InputField.defaultProps = {
  type: "",
  label: "",
  placeholder: "",
  disabled: false,
};

function InputField(props) {
  const { field, type, label, placeholder, disabled } = props;
  const { name } = field;
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Input
        id={name}
        {...field}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
      ></Input>
    </FormGroup>
  );
}

export default InputField;
