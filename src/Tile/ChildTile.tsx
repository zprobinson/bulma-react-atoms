import React from "react";
import withBulmaProps from "../bulma";
import Tile from "./Tile";

import { InnerChildTileProps } from "./Tile.types";

const ChildTile: React.FC<InnerChildTileProps> = (props) => {
  return <Tile kind="is-child" {...props} />;
};

export default withBulmaProps(ChildTile);
