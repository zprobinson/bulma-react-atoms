import React from "react";
import withBulmaProps from "../bulma";
import { foldClassNames } from "../utilities/listUtils";

import { InnerTileProps } from "./Tile.types";

const Tile: React.FC<InnerTileProps> = ({
  className,
  kind,
  tileSize,
  isVertical = false,
  boxed = false,
  ...props
}) => {
  const classNames = foldClassNames([
    className ?? "",
    kind ?? "",
    tileSize ?? "",
    isVertical ? "is-vertical" : "",
    boxed ? "box" : "",
  ]);

  return (
    <div data-testid="Tile" className={`tile ${classNames}`} {...props}></div>
  );
};

export default withBulmaProps(Tile);
