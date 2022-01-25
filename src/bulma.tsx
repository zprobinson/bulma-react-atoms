import React from "react";
import { BulmaHelpers } from "./types";
import { partitionBulmaPropsG } from "./utilities/propUtilities";
import { foldClassNames, foldHelpers } from "./utilities/listUtils";

type ClassName = { className?: string };

const withBulmaProps = <HigherOrderProps extends ClassName = ClassName>(
  WrappedComponent: React.ComponentType<HigherOrderProps>
) => {
  const displayName =
    WrappedComponent.displayName ?? WrappedComponent.name ?? "Component";

  const ComponentWithBulmaProps = <TProps extends HigherOrderProps & BulmaHelpers>(
    props: TProps
  ) => {
    const { bulmaProps, componentProps } = partitionBulmaPropsG<TProps>(props);
    const helpers = foldHelpers(bulmaProps);
    const classNames = foldClassNames([props.className ?? "", helpers]);

    return (
      <WrappedComponent
        {...(componentProps as TProps)}
        className={classNames}
      />
    );
  };

  ComponentWithBulmaProps.displayName = `withBulmaProps(${displayName})`;

  return ComponentWithBulmaProps;
};

export default withBulmaProps;
