import React from "react";
import { BulmaHelpers } from "../types";
import { foldClassNames, foldHelpers } from "./listUtils";
import { BulmaComponentPropsWithRef } from "../types/component";

export const partitionBulmaPropsG = <
  TProps extends { className?: string } & BulmaHelpers = BulmaHelpers
>(
  props: TProps
): {
  bulmaProps: BulmaHelpers;
  componentProps: Omit<TProps, keyof BulmaHelpers>;
} => {
  const {
    textColor,
    backgroundColor,
    margin,
    padding,
    fontSize,
    fontAlignment,
    fontTransform,
    fontWeight,
    fontFamily,
    show,
    hide,
    otherVisibility,
    flexDirection,
    flexWrap,
    justifyContent,
    alignContent,
    alignItems,
    alignSelf,
    flexGrow,
    flexShrink,
    otherHelper,
    ...rest
  } = props;

  const bulmaProps = {
    textColor,
    backgroundColor,
    margin,
    padding,
    fontSize,
    fontAlignment,
    fontTransform,
    fontWeight,
    fontFamily,
    show,
    hide,
    otherVisibility,
    flexDirection,
    flexWrap,
    justifyContent,
    alignContent,
    alignItems,
    alignSelf,
    flexGrow,
    flexShrink,
    otherHelper,
  } as BulmaHelpers;

  return { bulmaProps, componentProps: rest };
};

export const useInnerBulmaProps = <TElement extends React.ElementType>(
  props: BulmaComponentPropsWithRef<TElement>
): {
  classNames: string;
  rest: Omit<
    Omit<BulmaComponentPropsWithRef<TElement>, keyof BulmaHelpers>,
    "className"
  >;
} => {
  const { bulmaProps, componentProps } = partitionBulmaPropsG(props);
  const { className, ...rest } = componentProps;
  const helpers = foldHelpers(bulmaProps);
  const classNames = foldClassNames([className ?? "", helpers]);

  return { classNames, rest };
};
