import React from 'react';
import Tile from './Tile';
import { ChildTileProps } from './Tile.types';

const ChildTile: React.FC<ChildTileProps> = (props) => {
    return <Tile kind="is-child" {...props} />;
};

export default ChildTile;
