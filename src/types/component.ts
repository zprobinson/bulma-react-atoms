import React from 'react';
import {
    BackgroundColor,
    Margin,
    Padding,
    TextColor,
    TypographyAlignment,
    TypographyFontFamily,
    TypographyTransformation,
    TypographyWeight,
    DisplayShow,
    DisplayHide,
    DisplayInvisible,
    DisplayScreenReaderOnly,
    FlexDirection,
    FlexWrap,
    JustifyContent,
    AlignContent,
    AlignItems,
    AlignSelf,
    FlexGrow,
    FlexShrink,
    OtherHelpers,
    TypographySize,
} from './bulma';
import { OneOrMore, PartialReadonly } from './utility';

export type BulmaHelpers = PartialReadonly<{
    textColor: TextColor;
    backgroundColor: BackgroundColor;

    margin: OneOrMore<Margin>;
    padding: OneOrMore<Padding>;

    fontSize: OneOrMore<TypographySize>; // conflict with React.SVGAttributes<T>
    fontAlignment: OneOrMore<TypographyAlignment>;
    fontTransform: OneOrMore<TypographyTransformation>;
    fontWeight: TypographyWeight; // conflict with React.SVGAttributes<T>
    fontFamily: TypographyFontFamily; // conflict with React.SVGAttributes<T>

    show: OneOrMore<DisplayShow>;
    hide: OneOrMore<DisplayHide>;
    otherVisibility: OneOrMore<DisplayInvisible | DisplayScreenReaderOnly>;

    flexDirection: FlexDirection;
    flexWrap: FlexWrap;
    justifyContent: JustifyContent;
    alignContent: AlignContent;
    alignItems: AlignItems;
    alignSelf: AlignSelf;
    flexGrow: FlexGrow;
    flexShrink: FlexShrink;

    otherHelper: OneOrMore<OtherHelpers>;
}>;

export type BulmaComponentPropsWithoutRef<
    T extends React.ElementType
> = BulmaHelpers & React.ComponentPropsWithoutRef<T>;

export type BulmaComponentPropsWithRef<
    T extends React.ElementType
> = BulmaHelpers & React.ComponentPropsWithRef<T>;
