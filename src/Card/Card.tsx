import React from "react";
import { useInnerBulmaProps } from "../utilities/propUtilities";
import { CardProps } from "./Card.types";

const Card: React.FC<CardProps> = (props) => {
  const { classNames, rest } = useInnerBulmaProps(props);
  return (
    <div data-testid="Card" className={`card ${classNames}`} {...rest}></div>
  );
};

export default Card;
