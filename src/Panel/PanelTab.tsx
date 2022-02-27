import React from "react";
import { useInnerBulmaProps } from "../utilities/propUtilities";
import { PanelTabProps } from "./Panel.types";

const PanelTab: React.FC<PanelTabProps> = ({ isActive = false, ...props }) => {
  const { classNames, rest } = useInnerBulmaProps(
    props,
    isActive ? "is-active" : ""
  );

  return <a data-testid="PanelTab" className={classNames} {...rest}></a>;
};

export default PanelTab;
