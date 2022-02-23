import React from "react";
import { useInnerBulmaProps } from "../utilities/propUtilities";
import { FormProps } from "./Form.types";

const Form: React.FC<FormProps> = (props) => {
  const { classNames, rest } = useInnerBulmaProps(props);
  return <form data-testid="Form" className={classNames} {...rest}></form>;
};

export default Form;
