import React from "react";
import { useInnerBulmaProps } from "../utilities/propUtilities";
import { MediaRightProps } from "./MediaObject.types";

const MediaRight: React.FC<MediaRightProps> = (props) => {
  const { classNames, rest } = useInnerBulmaProps(props);
  return <div data-testid="MediaRight" className={classNames} {...rest}></div>;
};

export default MediaRight;
