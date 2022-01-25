import { BulmaHelpers } from "./types";
import { foldClassNames, foldHelpers } from "./utilities/listUtils";
import { partitionBulmaPropsG } from "./utilities/propUtilities";

const useBulmaProps = <AllProps extends BulmaHelpers = BulmaHelpers>(
  props: AllProps,
  ...classNames: string[]
) => {
  const { bulmaProps } = partitionBulmaPropsG(props);
  const helpers = foldHelpers(bulmaProps);

  return foldClassNames([helpers, ...classNames]);
};

export default useBulmaProps;
