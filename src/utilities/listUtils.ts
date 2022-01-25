import { BulmaHelpers } from "../types";

const isString = (str: unknown): str is string => typeof str === "string";

const isStringArray = (array: unknown): array is string[] =>
  Array.isArray(array) && array.every(isString);

export const foldHelpers: (helpers: BulmaHelpers) => string = (helpers) => {
  return Object.values(helpers)
    .filter((item) => !!item && (isString(item) || isStringArray(item)))
    .reduce(
      (acc, curr) =>
        isString(curr)
          ? [acc, curr].join(" ").trim()
          : [acc, ...(curr as string[])].join(" ").trim(),
      ""
    );
};

export const foldClassNames = (input: string | string[]): string =>
  Array.isArray(input)
    ? input.reduce((acc, curr) => [acc, curr].join(" ").trim(), "")
    : input;
