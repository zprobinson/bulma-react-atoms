import React from "react";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";
import { partitionBulmaPropsG } from "../utilities/propUtilities";
import { PanelBlockProps } from "./Panel.types";

const _default_element_ = "div";

const PanelBlock = <E extends React.ElementType = typeof _default_element_>({
  as,
  ...props
}: PanelBlockProps<E>) => {
  const { bulmaProps, componentProps } = partitionBulmaPropsG(props);
  const helpers = foldHelpers(bulmaProps);
  const { className, ...rest } = componentProps;
  const classNames = foldClassNames([className ?? "", helpers]);

  const Component = as ?? _default_element_;

  return (
    <Component
      data-testid="PanelBlock"
      className={`panel-block ${classNames}`}
      {...rest}
    ></Component>
  );
};

export default PanelBlock;
