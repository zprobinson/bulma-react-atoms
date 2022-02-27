import React from "react";
import { useInnerBulmaProps } from "../utilities/propUtilities";
import { TileProps } from "./Tile.types";

const Tile: React.FC<TileProps> = ({
  kind,
  tileSize,
  isVertical = false,
  boxed = false,
  ...props
}) => {
  const { classNames, rest } = useInnerBulmaProps(
    props,
    kind ?? "",
    tileSize ?? "",
    isVertical ? "is-vertical" : "",
    boxed ? "box" : ""
  );

  return (
    <div data-testid="Tile" className={`tile ${classNames}`} {...rest}></div>
  );
};

export default Tile;
