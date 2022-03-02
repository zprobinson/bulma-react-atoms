module.exports = (componentName) => ({
    content: `
import React from "react";
import { render } from "@testing-library/react";

import ${componentName} from "./${componentName}";
import { ${componentName}Props } from "./${componentName}.types";

describe("${componentName} Component", () => {
  const renderComponent = (props: ${componentName}Props) => render(<${componentName} {...props} />);

  it("should render children correctly", () => {
    const expected = "harvey was here";
    const { getByTestId } = renderComponent({ children: expected });

    const component = getByTestId("${componentName}");

    expect(component).toHaveTextContent(expected);
  });
});
`,
    extension: `.test.tsx`,
});
