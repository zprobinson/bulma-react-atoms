import React from "react";
import withBulmaProps from "../bulma";
import Tile from "./Tile";

import { InnerParentTileProps } from "./Tile.types";

const ParentTile: React.FC<InnerParentTileProps> = (props) => {
  return <Tile kind="is-parent" {...props} />;
};

export default withBulmaProps(ParentTile);
