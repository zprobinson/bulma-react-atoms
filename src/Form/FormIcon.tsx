import React from "react";
import { Icon } from "../Icon";
import { useInnerBulmaProps } from "../utilities/propUtilities";
import { FormIconProps } from "./Form.types";

const FormIcon: React.FC<FormIconProps> = ({ alignment, ...props }) => {
  const { classNames, rest } = useInnerBulmaProps(props, alignment ?? "");
  return <Icon className={classNames} {...rest} />;
};

export default FormIcon;
