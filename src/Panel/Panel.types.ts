import { IconProps } from "./../Icon/Icon.types";
import {
  BulmaComponentPropsWithoutRef,
  PrimaryColor,
  WithoutHelpers,
  Polymorphic,
  BulmaHelpers,
} from "./../types";

export type InnerPanelProps = WithoutHelpers<PanelProps>;
export type InnerPanelTabProps = WithoutHelpers<PanelTabProps>;
export type InnerPanelIconProps = WithoutHelpers<PanelIconProps>;

export type PanelProps = BulmaComponentPropsWithoutRef<"nav"> & {
  color?: PrimaryColor;
};

export type PanelTabsProps = BulmaComponentPropsWithoutRef<"p">;
export type PanelTabProps = BulmaComponentPropsWithoutRef<"a"> & {
  isActive?: boolean;
};

export type PanelHeadingProps = BulmaComponentPropsWithoutRef<"p">;

/**
 * @deprecated Use PanelBlock with the `as` prop instead.
 */
export type PanelBlockDivProps = BulmaComponentPropsWithoutRef<"div">;
/**
 * @deprecated Use PanelBlock with the `as` prop instead.
 */
export type PanelBlockAnchorProps = BulmaComponentPropsWithoutRef<"a">;
/**
 * @deprecated Use PanelBlock with the `as` prop instead.
 */
export type PanelBlockLabelProps = BulmaComponentPropsWithoutRef<"label">;
export type PanelBlockProps<E extends React.ElementType> = Polymorphic<
  E,
  BulmaHelpers
>;

export type PanelIconProps = Omit<IconProps, "containerSize">;
