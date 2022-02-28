import React from "react";
import { CardFooterItem } from ".";
import { CardFooterItemProps } from "./Card.types";

/**
 * @deprecated Use CardFooterItem with the `as` prop instead.
 */
const CardFooterParagraph = (props: Omit<CardFooterItemProps<"div">, "as">) => {
  return <CardFooterItem as="div" {...props} />;
};

export default CardFooterParagraph;
