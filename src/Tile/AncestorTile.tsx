import React from "react";
import withBulmaProps from "../bulma";
import Tile from "./Tile";

import { InnerAncestorTileProps } from "./Tile.types";

const AncestorTile: React.FC<InnerAncestorTileProps> = (props) => {
  return <Tile kind="is-ancestor" {...props} />;
};

export default withBulmaProps(AncestorTile);
