import React from "react";
import { BulmaComponentPropsWithoutRef, BulmaHelpers } from "../types";

export const partitionBulmaComponentProps = <T extends React.ElementType>(
  props: BulmaComponentPropsWithoutRef<T>
): {
  bulmaProps: BulmaHelpers;
  componentProps: React.ComponentPropsWithoutRef<T>;
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

  const componentProps: React.ComponentPropsWithoutRef<T> = rest as React.ComponentPropsWithoutRef<T>;

  return { bulmaProps, componentProps };
};

export const partitionBulmaPropsG = <
  TProps extends { className?: string } & BulmaHelpers = BulmaHelpers
>(
  props: TProps
) => {
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
