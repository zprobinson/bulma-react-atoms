import { Equals, Polymorphic } from "..";
import {
  BulmaComponentPropsWithoutRef,
  BulmaHelpers,
  WithoutHelpers,
} from "./../types/component";

export type InnerDropdownProps = WithoutHelpers<DropdownProps>;
export type InnerDropdownAnchorProps = WithoutHelpers<DropdownAnchorProps>;
export type InnerDropdownDivProps = WithoutHelpers<DropdownDivProps>;

export type DropdownProps = BulmaComponentPropsWithoutRef<"div"> & {
  isActive?: boolean;
  isHoverable?: boolean;
  isRightAligned?: boolean;
};

export type DropdownTriggerProps = BulmaComponentPropsWithoutRef<"div">;
export type DropdownMenuProps = BulmaComponentPropsWithoutRef<"div">;
export type DropdownContentProps = BulmaComponentPropsWithoutRef<"div">;

type DropdownItemPropsBase = { isActive?: boolean };
/**
 * @deprecated Use DropdownItem with the `as` prop instead.
 */
export type DropdownAnchorProps = BulmaComponentPropsWithoutRef<"a"> &
  DropdownItemPropsBase;
/**
 * @deprecated Use DropdownItem with the `as` prop instead.
 */
export type DropdownDivProps = BulmaComponentPropsWithoutRef<"div"> &
  DropdownItemPropsBase;

export type DropdownItemProps<E extends React.ElementType> = Polymorphic<
  E,
  BulmaHelpers & { isActive?: boolean }
>;

export type DropdownDividerProps = BulmaComponentPropsWithoutRef<"hr">;
