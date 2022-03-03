import React from 'react';
import Tile from './Tile';

export default {
    title: 'Tile',
};

export const WithBar = () => <Tile foo="bar" />;

export const WithBaz = () => <Tile foo="baz" />;
