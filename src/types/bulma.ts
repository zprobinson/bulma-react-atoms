import { Is } from '.';

/* ---- Responsive Breakpoints ---- */
export type Breakpoint =
    | 'mobile'
    | 'tablet'
    | 'desktop'
    | 'widescreen'
    | 'fullhd';

type MobileBreakpoint = 'touch';
type OnlyBreakpoint = `${Extract<
    Breakpoint,
    'tablet' | 'desktop' | 'widescreen'
>}-only`;

/* ---- Colors ---- */
export type PrimaryColor =
    | 'primary'
    | 'link'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger';

export type SecondaryColor = 'white' | 'black' | Tint;

type Tint = 'dark' | 'light';
type BlackSuffix = 'bis' | 'ter';
type WhiteSuffix = BlackSuffix;
type GreySuffix = Tint | 'darker' | 'lighter';
type SecondaryColorTint =
    | `black-${BlackSuffix}`
    | `white-${WhiteSuffix}`
    | 'grey'
    | `grey-${GreySuffix}`;

type PrimaryColorTint = `${PrimaryColor}-${Tint}`;

/* ---- Text Color ---- */
type TextColorOption =
    | PrimaryColor
    | PrimaryColorTint
    | SecondaryColor
    | SecondaryColorTint;

export type TextColor = `has-text-${TextColorOption}`;

/* ---- Background Color ---- */
type BackgroundColorOption =
    | PrimaryColor
    | PrimaryColorTint
    | SecondaryColor
    | SecondaryColorTint;

export type BackgroundColor = `has-background-${BackgroundColorOption}`;

/* ---- Spacing ---- */
type SpacingDirectionOption = '' | 't' | 'r' | 'b' | 'l' | 'x' | 'y';
type SpacingValueOption = '0' | '1' | '2' | '3' | '4' | '5' | '6' | 'auto';
type CombinedSpacingOption = `${SpacingDirectionOption}-${SpacingValueOption}`;

export type Margin = `m${CombinedSpacingOption}`;
export type Padding = `p${CombinedSpacingOption}`;

/* ---- Typography ---- */
// Size
type TypographySizeOption = '1' | '2' | '3' | '4' | '5' | '6' | '7';
type ResponsiveSizeOption = `${TypographySizeOption}-${
    | Breakpoint
    | MobileBreakpoint}`;
type CombinedTypographySizeOption = TypographySizeOption | ResponsiveSizeOption;

export type TypographySize = `is-size-${CombinedTypographySizeOption}`;

// Alignment
type AlignmentOption = 'centered' | 'justified' | 'left' | 'right';
type ResponsiveAlignmentOption = Breakpoint | MobileBreakpoint | OnlyBreakpoint;
type CombinedTypographyAlignment =
    | AlignmentOption
    | `${AlignmentOption}-${ResponsiveAlignmentOption}`;

export type TypographyAlignment = `has-text-${CombinedTypographyAlignment}`;

// Transformation
type TransformationOption =
    | 'capitalized'
    | 'lowercase'
    | 'uppercase'
    | 'italic'
    | 'underlined';

export type TypographyTransformation = `is-${TransformationOption}`;

// Weight
type WeightOption = 'light' | 'normal' | 'medium' | 'semibold' | 'bold';

export type TypographyWeight = `has-text-weight-${WeightOption}`;

// Font Family
type FontFamilyOption =
    | 'sans-serif'
    | 'monospace'
    | 'primary'
    | 'secondary'
    | 'code';

export type TypographyFontFamily = `is-family-${FontFamilyOption}`;

/* ---- Visibility ---- */
type DisplayClassOption =
    | 'block'
    | 'flex'
    | 'inline'
    | 'inline-block'
    | 'inline-flex';
type ResponsiveDisplayClassOption =
    | Breakpoint
    | MobileBreakpoint
    | OnlyBreakpoint;
type CombinedDisplayClassOption =
    | DisplayClassOption
    | `${DisplayClassOption}-${ResponsiveDisplayClassOption}`;

// Show
export type DisplayShow = Is<CombinedDisplayClassOption>;

// Hide
export type DisplayHide =
    | 'is-hidden'
    | `is-hidden-${ResponsiveDisplayClassOption}`;
export type DisplayInvisible = 'is-invisible';
export type DisplayScreenReaderOnly = 'is-sr-only';

/* ---- Flexbox ---- */
// Flex Direction
type FlexDirectionOption = 'row' | 'row-reverse' | 'column' | 'column-reverse';

export type FlexDirection = `is-flex-direction-${FlexDirectionOption}`;

// Flex Wrap
type FlexWrapOption = 'nowrap' | 'wrap' | 'wrap-reverse';

export type FlexWrap = `is-flex-wrap-${FlexWrapOption}`;

// Justify Content
type JustifyContentOption =
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'start'
    | 'end'
    | 'left'
    | 'right';

export type JustifyContent = `is-justify-content-${JustifyContentOption}`;

// Align Content
type AlignContentOption =
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
    | 'start'
    | 'end'
    | 'baseline';

export type AlignContent = `is-align-content-${AlignContentOption}`;

// Align Items
type AlignItemsOption =
    | 'stretch'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'baseline'
    | 'start'
    | 'end'
    | 'self-start'
    | 'self-end';

export type AlignItems = `is-align-items-${AlignItemsOption}`;

// Align Self
type AlignSelfOption =
    | 'auto'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'baseline'
    | 'stretch';

export type AlignSelf = `is-align-self-${AlignSelfOption}`;

// Flex Grow and Flex Shrink
type FlexGrowOption = '0' | '1' | '2' | '3' | '4' | '5';
type FlexShrinkOption = FlexGrowOption;

export type FlexGrow = `is-flex-grow-${FlexGrowOption}`;
export type FlexShrink = `is-flex-shrink-${FlexShrinkOption}`;

/* ---- Other Helpers ---- */
type Clearfix = 'clearfix';
type Pulled = 'pulled-left' | 'pulled-right';
type Overlay = 'overlay';
type Clipped = 'clipped';
type NoRadius = 'radiusless';
type NoShadow = 'shadowless';
type NotSelectable = 'unselectable';
type Clickable = 'clickable';
type PositionRelative = 'relative';
type OtherHelpersOption =
    | Clearfix
    | Pulled
    | Overlay
    | Clipped
    | NoRadius
    | NoShadow
    | NotSelectable
    | Clickable
    | PositionRelative;

export type OtherHelpers = Is<OtherHelpersOption>;

/* ---- Size ---- */
export type Size = Is<'small' | 'normal' | 'medium' | 'large'>;
