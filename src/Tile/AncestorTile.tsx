import React from 'react';
import Tile from './Tile';
import { AncestorTileProps } from './Tile.types';

const AncestorTile: React.FC<AncestorTileProps> = (props) => {
    return <Tile kind="is-ancestor" {...props} />;
};

export default AncestorTile;
