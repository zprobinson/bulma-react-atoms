import React from 'react';
import { BulmaHelpers } from '../types';
import { BulmaComponentPropsWithoutRef } from '../types/component';
import { foldClassNames, foldHelpers } from './listUtils';

export const partitionBulmaPropsG = <
    TProps extends { className?: string } & BulmaHelpers = BulmaHelpers
>(
    props: TProps
): {
    bulmaProps: BulmaHelpers;
    componentProps: Omit<TProps, keyof BulmaHelpers>;
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

    return { bulmaProps, componentProps: rest };
};

export const useInnerBulmaProps = <
    TProps extends BulmaComponentPropsWithoutRef<React.ElementType>
>(
    props: TProps,
    ...classes: string[]
): {
    classNames: string;
    rest: Omit<Omit<TProps, keyof BulmaHelpers>, 'className'>;
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
