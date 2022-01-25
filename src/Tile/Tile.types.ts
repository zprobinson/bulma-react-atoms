import { BulmaComponentPropsWithoutRef, WithoutHelpers, Is } from "./../types";

export type InnerTileProps = WithoutHelpers<TileProps>;
export type InnerAncestorTileProps = WithoutHelpers<AncestorTileProps>;
export type InnerParentTileProps = WithoutHelpers<ParentTileProps>;
export type InnerChildTileProps = WithoutHelpers<ChildTileProps>;

export type TileProps = BulmaComponentPropsWithoutRef<"div"> & {
  kind?: TileKind;
  tileSize?: TileSize;
  isVertical?: boolean;
  boxed?: boolean;
};

export type AncestorTileProps = Omit<TileProps, "kind">;
export type ParentTileProps = Omit<TileProps, "kind" | "boxed">;
export type ChildTileProps = Omit<TileProps, "kind" | "isVertical">;

type TileKind = Is<"ancestor" | "parent" | "child">;
type TileSize = Is<
  "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12"
>;
