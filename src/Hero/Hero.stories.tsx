import React from 'react';
import Hero from './Hero';

export default {
    title: 'Hero',
};

export const WithBar = () => <Hero foo="bar" />;

export const WithBaz = () => <Hero foo="baz" />;
