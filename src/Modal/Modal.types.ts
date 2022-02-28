import { BulmaComponentPropsWithoutRef, Is } from "..";

export type ModalProps = BulmaComponentPropsWithoutRef<"div"> & {
  isActive?: boolean;
};
export type ModalBackgroundProps = Omit<
  BulmaComponentPropsWithoutRef<"div">,
  "children"
>;
export type ModalContentProps = BulmaComponentPropsWithoutRef<"div">;

export type ModalCloseProps = Omit<
  BulmaComponentPropsWithoutRef<"button">,
  "children"
> & {
  size?: Is<"large" | "medium" | "normal" | "small">;
};

export type ModalCardProps = BulmaComponentPropsWithoutRef<"div">;
export type ModalCardHeaderProps = BulmaComponentPropsWithoutRef<"header">;
export type ModalCardTitleProps = BulmaComponentPropsWithoutRef<"p">;
export type ModalCardBodyProps = BulmaComponentPropsWithoutRef<"section">;
export type ModalCardFooterProps = BulmaComponentPropsWithoutRef<"footer">;
