import { BulmaHelpers } from "../types";

const isString = (str: unknown): str is string => typeof str === "string";

const isStringArray = (array: unknown): array is string[] =>
  Array.isArray(array) && array.every(isString);

export const foldHelpers: (helpers: BulmaHelpers) => string = (helpers) => {
  return Object.values(helpers)
    .filter((s) => !!s)
    .flat()
    .join(" ");
};

export const foldClassNames = (input: string | string[]): string =>
  isStringArray(input) ? input.join(" ") : input;
