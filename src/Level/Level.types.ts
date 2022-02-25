import { BulmaComponentPropsWithoutRef } from "..";

export type LevelProps = BulmaComponentPropsWithoutRef<"div"> & {
  isMobile?: boolean;
};

export type LevelLeftProps = BulmaComponentPropsWithoutRef<"div">;
export type LevelRightProps = LevelLeftProps;
export type LevelItemProps = LevelLeftProps;
