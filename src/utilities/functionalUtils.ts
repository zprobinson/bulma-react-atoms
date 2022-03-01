import { OneOrMore } from '../types/utility';

export const id: <T>(item: T) => T = (item) => item;

export const valueOr: <T>(alternative: T) => (item: T | undefined) => T =
    (alternative) => (item) =>
        item != null ? item : alternative;

export const strValueOr: (str: string | undefined) => string = valueOr('');

export const oneOrMoreValueOr: (
    str: OneOrMore<string> | undefined
) => OneOrMore<string> = valueOr('' as OneOrMore<string>);
