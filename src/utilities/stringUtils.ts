export const toTitleCaseWithSpaceDelimiter: (camelCase: string) => string = (
  camelCase
) =>
  camelCase
    .replace(/([A-Z])/g, (match) => ` ${match}`)
    .replace(/^./, (match) => match.toUpperCase())
    .trim();
