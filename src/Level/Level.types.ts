import { BulmaComponentPropsWithoutRef, WithoutHelpers } from "..";

export type InnerLevelProps = WithoutHelpers<LevelProps>;

export type LevelProps = BulmaComponentPropsWithoutRef<"div"> & {
  isMobile?: boolean;
};

type LevelSideProps = BulmaComponentPropsWithoutRef<"div">;
export type LevelLeftProps = LevelSideProps;
export type LevelRightProps = LevelSideProps;

export type LevelItemProps = BulmaComponentPropsWithoutRef<"div">;
