import React from "react";
import withBulmaProps from "../bulma";
import { foldClassNames } from "../utilities/listUtils";

import { SectionProps } from "./Section.types";

const Section: React.FC<SectionProps> = ({ className, size, ...props }) => {
  const classNames = foldClassNames([className ?? "", size ?? ""]);

  return (
    <div
      data-testid="Section"
      className={`section ${classNames}`}
      {...props}
    ></div>
  );
};

export default withBulmaProps(Section);
