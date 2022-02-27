import React from "react";
import Tile from "./Tile";
import { ParentTileProps } from "./Tile.types";

const ParentTile: React.FC<ParentTileProps> = (props) => {
  return <Tile kind="is-parent" {...props} />;
};

export default ParentTile;
