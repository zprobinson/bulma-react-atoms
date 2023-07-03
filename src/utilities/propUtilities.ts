import React from 'react';
import { BulmaHelpers } from '../types';
import { BulmaComponentPropsWithoutRef } from '../types/component';
import { foldClassNames, foldHelpers } from './listUtils';

type PartitionedPropType<T> = T extends infer U & BulmaHelpers
    ? U extends { className?: string }
        ? U
        : never
    : never;

export const partitionBulmaPropsG = <
    TProps extends { className?: string } & BulmaHelpers = BulmaHelpers
>(
    props: TProps
): {
    bulmaProps: BulmaHelpers;
    componentProps: PartitionedPropType<TProps>;
} => {
    const {
        textColor,
        backgroundColor,
        margin,
        padding,
        fontSize,
        fontAlignment,
        fontTransform,
        fontWeight,
        fontFamily,
        show,
        hide,
        otherVisibility,
        flexDirection,
        flexWrap,
        justifyContent,
        alignContent,
        alignItems,
        alignSelf,
        flexGrow,
        flexShrink,
        otherHelper,
        ...rest
    } = props;

    const bulmaProps = {
        textColor,
        backgroundColor,
        margin,
        padding,
        fontSize,
        fontAlignment,
        fontTransform,
        fontWeight,
        fontFamily,
        show,
        hide,
        otherVisibility,
        flexDirection,
        flexWrap,
        justifyContent,
        alignContent,
        alignItems,
        alignSelf,
        flexGrow,
        flexShrink,
        otherHelper,
    } as BulmaHelpers;

    return { bulmaProps, componentProps: rest as PartitionedPropType<TProps> };
};

/** This hook is intended for atom-level component creation. Use with caution.
 * Partitions the 'BulmaHelpers' type properties from arbitrary prop-types.
 * Generates the `classNames` and returns the rest of the provided prop-types.
 */
export const useInnerBulmaProps = <
    TProps extends BulmaComponentPropsWithoutRef<React.ElementType>
>(
    props: TProps,
    ...classes: string[]
): {
    classNames: string;
    rest: Omit<PartitionedPropType<TProps>, 'className'>;
} => {
    const { bulmaProps, componentProps } = partitionBulmaPropsG(props);
    const { className, ...rest } = componentProps;
    const helpers = foldHelpers(bulmaProps);
    const classNames = foldClassNames([
        className ?? '',
        helpers,
        ...classes.filter((s) => !!s),
    ]);

    return { classNames, rest };
};
