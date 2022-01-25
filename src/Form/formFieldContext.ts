import React from "react";
import { FormFieldContextType } from "./Form.types";

export const FormFieldContext = React.createContext<FormFieldContextType>({
  size: undefined,
});

const useFormFieldContext = () => {
  return React.useContext(FormFieldContext);
};

export default useFormFieldContext;
