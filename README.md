# Control Bulma Atoms

Atomic React/TypeScript components for [Bulma v0.9.3](https://bulma.io/documentation/). Useful for type-safe implementations of the Bulma CSS Framework.

# To Install

`control-bulma-atoms` is hosted on Interstates' private internal npm registry, which is hosted on [http://icsi-teamsrvr:8081/](http://icsi-teamsrvr:8081/).

In order to access the internal npm registry, you will need to update your npm configuration to point at the new internal location (instead of the default public registry).

1. `npm set registry http://icsi-teamsrvr:8081/`
2. You're done!

You will still be able to access the public npm registry, we are using a tool called [Verdaccio](https://verdaccio.org) that acts as a middleman/cache between us and the scary world. We also get the benefit of being able to publish packages internally that no one else can access/use.

This should have no change in your current npm package installation behavior other that allowing you to also access internal packages.

If you would like to keep your registry as default, but _opt in_ to the internal registry on a _per npm install_ basis, you can do the following instead:

1. Add the `--registry` flag to the CLI command when performing an `npm install`
1. e.g. `npm i control-bulma-atoms --registry http://icsi-teamsrvr:8081/`
1. You're done!

# Careful with this approach, however... If there are naming conflicts (some other shmuck published a public npm package called `control-bulma-atoms`), and you forgot the `--registry` flag, you will grab **their** version of the package instead of _our_ wonderful package! The recommended approach is to update your npm configuration via `npm set registry http://icsi-teamsrvr:8081/` and never have to worry about it again.

1. Navigate to your project directory where you'd like to use this component library.
2. Run the following command:
   1. `npm install control-bulma-react --registry http://localhost:4873`

You should now be ready to use Bulma React!

# Versioning

`control-bulma-atoms` will use [**semantic versioning**](https://semver.org). This means the following:

1. MAJOR version when breaking changes are made (incompatible API changes)
2. MINOR version when functionality is added in a backwards compatible manner
3. PATCH version when adding no new functionality and when added in a backwards compatible manner. (think bug fixes or performance improvements)

It is important for consumers of the library to understand because as features are released, you may need to update your `package.json` in order to retrieve the features that you desire.

If:

- You want the absolute latest and greatest changes and throw caution to the wind about backwards compatibility use:
  - Major release configuration: `"control-bulma-atoms": "*"` or `"control-bulma-atoms": "x"`
- You want all of the latest additions that are still backwards compatible to when you first installed the package (**MOST LIKELY**) use:
  - Minor release configuration: `"control-bulma-atoms": "^1.0.4"` or `"control-bulma-atoms": "1.x"`
- You are quite happy with what you have already, thank you very much, and would only like updates to improve performance and fix bugs, use:
  - Patch release configuration: `"control-bulma-atoms": "~1.0.4"` or `"control-bulma-atoms": "1.0.x"`
- I don't trust package.json to handle updating my packages and I'd rather explicitly define _exactly_ what version I'm using, use:
  - I know what I'm doing configuration: `"control-bulma-atoms": "1.0.4"`

With your configuration chosen, you are now able to perform `npm update control-bulma-atoms` and rest assured that you will get the version that matches your needs.

# Documentation

There is currently no Storybook documentation for this project, but it is on the [to-do list](http://icsi-teamsrvr:8080/tfs/Samples/Web%20Components/_workitems/edit/5/).

All of these Bulma components are wrappers around the CSS styles and therefore this library's effectiveness will be maximized if the developer follows the CSS layout rules outlined in the [Bulma documentation](https://bulma.io/documentation/). Usage inconsistent with the described documentation may result in weird behavior.

# To Use

```tsx
import React from "react";
import "bulma/css/bulma.min.css";
import { Button } from "control-bulma-atoms";

export default () => (
  <Button
    color="is-primary"
    size="is-large"
    isRounded
    onClick={() => alert("I clicked a Bulma Button")}
  >
    My Bulma Button
  </Button>
);
```
