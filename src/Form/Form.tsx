import React from "react";
import withBulmaProps from "../bulma";

import { FormProps } from "./Form.types";

const Form: React.FC<FormProps> = (props) => {
  return <form data-testid="Form" {...props}></form>;
};

export default withBulmaProps(Form);
