import React from 'react';
import Container from './Container';

export default {
    title: 'Container',
};

export const WithBar = () => <Container foo="bar" />;

export const WithBaz = () => <Container foo="baz" />;
