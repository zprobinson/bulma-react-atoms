import React from "react";
import { foldClassNames } from "../utilities/listUtils";
import { useInnerBulmaProps } from "../utilities/propUtilities";
import { FormFieldProps } from "./Form.types";
import useFormFieldContext, { FormFieldContext } from "./formFieldContext";

type KindProps = Pick<
  FormFieldProps,
  "kind" | "alignment" | "groupMultiline" | "isExpanded"
>;

const getKindClasses: (props: KindProps) => string = ({ kind, ...props }) => {
  if (kind === undefined) return "";

  const getAddonsClasses = ({
    alignment,
    isExpanded,
  }: Pick<KindProps, "alignment" | "isExpanded">) => {
    return foldClassNames([
      "has-addons",
      alignment ? `has-addons-${alignment}` : "",
      isExpanded ? "is-expanded" : "",
    ]);
  };

  const getGroupedClasses = ({
    alignment,
    groupMultiline,
  }: Pick<KindProps, "alignment" | "groupMultiline">) => {
    return foldClassNames([
      "is-grouped",
      alignment ? `is-grouped-${alignment}` : "",
      groupMultiline ? "is-grouped-multiline" : "",
    ]);
  };

  return kind === "addons" ? getAddonsClasses(props) : getGroupedClasses(props);
};

const FormField: React.FC<FormFieldProps> = ({
  kind,
  alignment,
  size,
  groupMultiline = false,
  isExpanded = false,
  isHorizontal = false,
  ...props
}) => {
  const context = useFormFieldContext();
  const kindClass = getKindClasses({
    kind,
    alignment,
    groupMultiline,
    isExpanded,
  });
  const { classNames, rest } = useInnerBulmaProps(
    props,
    kindClass,
    isHorizontal ? "is-horizontal" : ""
  );
  return (
    <FormFieldContext.Provider value={{ size: size ?? context.size }}>
      <div
        data-testid="FormField"
        className={`field ${classNames}`}
        {...rest}
      ></div>
    </FormFieldContext.Provider>
  );
};

export default FormField;
