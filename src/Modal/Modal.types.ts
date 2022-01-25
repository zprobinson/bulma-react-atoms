import { WithoutHelpers } from './../types/component';
import { BulmaComponentPropsWithoutRef, Is } from "..";

export type InnerModalProps = WithoutHelpers<ModalProps>;
export type InnerModalCloseProps = WithoutHelpers<ModalCloseProps>;

export type ModalProps = BulmaComponentPropsWithoutRef<"div"> & {
  isActive?: boolean;
};
export type ModalBackgroundProps = BulmaComponentPropsWithoutRef<"div">;
export type ModalContentProps = BulmaComponentPropsWithoutRef<"div">;

export type ModalCloseProps = BulmaComponentPropsWithoutRef<"button"> & {
  size?: Is<"large" | "medium" | "normal" | "small">;
};

export type ModalCardProps = BulmaComponentPropsWithoutRef<"div">;
export type ModalCardHeaderProps = BulmaComponentPropsWithoutRef<"header">;
export type ModalCardTitleProps = BulmaComponentPropsWithoutRef<"p">;
export type ModalCardBodyProps = BulmaComponentPropsWithoutRef<"section">;
export type ModalCardFooterProps = BulmaComponentPropsWithoutRef<"footer">;
