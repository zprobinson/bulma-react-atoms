import React from "react";
import { useInnerBulmaProps } from "../utilities/propUtilities";
import { TabsListProps } from "./Tabs.types";

const TabsList: React.FC<TabsListProps> = (props) => {
  const { classNames, rest } = useInnerBulmaProps(props);
  return <ul data-testid="TabsList" className={classNames} {...rest}></ul>;
};

export default TabsList;
