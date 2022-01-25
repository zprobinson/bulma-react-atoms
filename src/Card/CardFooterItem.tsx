import React from "react";
import { partitionBulmaPropsG } from "../utilities/propUtilities";
import { foldClassNames, foldHelpers } from "../utilities/listUtils";

import { CardFooterItemProps } from "./Card.types";

const _default_element_ = "a";

const CardFooterItem = <
  E extends React.ElementType = typeof _default_element_
>({
  as,
  ...props
}: CardFooterItemProps<E>) => {
  const { bulmaProps, componentProps } = partitionBulmaPropsG(props);
  const helpers = foldHelpers(bulmaProps);
  const { className, ...rest } = componentProps;
  const classNames = foldClassNames([className ?? "", helpers]);

  const Component = as ?? _default_element_;

  return (
    <Component
      data-testid="CardFooterItem"
      className={`card-footer ${classNames}`}
      {...rest}
    ></Component>
  );
};

export default CardFooterItem;
