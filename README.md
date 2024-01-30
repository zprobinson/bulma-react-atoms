# Control Bulma Atoms

Atomic React/TypeScript components for [Bulma v0.9.4](https://bulma.io/documentation/). Useful for type-safe implementations of the Bulma CSS Framework.

# Versioning

`control-bulma-atoms` will use [**semantic versioning**](https://semver.org). This means the following:

1. MAJOR version when breaking changes are made (incompatible API changes)
2. MINOR version when functionality is added in a backwards compatible manner
3. PATCH version when adding no new functionality and when added in a backwards compatible manner. (think bug fixes or performance improvements)

It is important for consumers of the library to understand because as features are released, you may need to update your `package.json` in order to retrieve the features that you desire.

If:

-   You want the absolute latest and greatest changes and throw caution to the wind about backwards compatibility use:
    -   Major release configuration: `"control-bulma-atoms": "*"` or `"control-bulma-atoms": "x"`
-   You want all of the latest additions that are still backwards compatible to when you first installed the package (**MOST LIKELY**) use:
    -   Minor release configuration: `"control-bulma-atoms": "^1.0.4"` or `"control-bulma-atoms": "1.x"`
-   You are quite happy with what you have already, thank you very much, and would only like updates to improve performance and fix bugs, use:
    -   Patch release configuration: `"control-bulma-atoms": "~1.0.4"` or `"control-bulma-atoms": "1.0.x"`
-   I don't trust package.json to handle updating my packages and I'd rather explicitly define _exactly_ what version I'm using, use:
    -   I know what I'm doing configuration: `"control-bulma-atoms": "1.0.4"`

With your configuration chosen, you are now able to perform `npm update control-bulma-atoms` and rest assured that you will get the version that matches your needs.

# Documentation

All of these Bulma components are wrappers around the CSS styles and therefore this library's effectiveness will be maximized if the developer follows the CSS layout rules outlined in the [Bulma documentation](https://bulma.io/documentation/). Usage inconsistent with the described documentation may result in weird behavior.

# To Use

```jsx
import React from 'react';
import 'bulma/css/bulma.min.css';
import { Button, ButtonProps } from 'control-bulma-atoms';

export const MyStyledButton = () => (
    <Button
        color="is-primary"
        size="is-large"
        isRounded
        onClick={() => alert('I clicked a Bulma Button')}
    >
        My Bulma Button
    </Button>
);
```
