# Bulma React

Atomic React/TypeScript components for [Bulma v0.9.3](https://bulma.io/documentation/). Useful for type-safe implementations of the Bulma CSS Framework.

# To Install

As this will be a privately hosted npm package, there is some setup required before you are able to access this package directly from your project.

Until internal private servers are set up and configured, you will act as your own private npm registry locally. Fortunately, set up is easy!

1. Clone this git repository locally to your machine.
2. Globally install [Verdaccio](https://verdaccio.org/), a private proxy registry:
   1. `npm install --global verdaccio`
3. From the command prompt, run the following command to start your private proxy registry
   1. `verdaccio`
4. It will be running on `http://localhost:4873`
5. Navigate to the root directory of your local version of the repository and run the following script:
   1. `npm run local-publish`
   2. If necessary, create a local user to sign in as before the local-publish.

You now have a private registry running on your local machine and have successfully published the library to it.

In order to use your locally hosted npm package, we need to utilize the `---registry` flag when performing an `npm install` to tell npm where to look for our package.

1. Navigate to your project directory where you'd like to use this component library.
2. Run the following command:
   1. `npm install bulma-react --registry http://localhost:4873`

You should now be ready to use Bulma React!

# Documentation

There is currently no Storybook documentation for this project.

All of these Bulma components are wrappers around the CSS styles and therefore this library's effectiveness will be maximized if the developer follows the CSS layout rules outlined in the [Bulma documentation](https://bulma.io/documentation/). Usage inconsistent with the described documentation may result in weird behavior.

# To Use

```tsx
import React from "react";
import "bulma/css/bulma.min.css";
import { Button } from "bulma-react";

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
