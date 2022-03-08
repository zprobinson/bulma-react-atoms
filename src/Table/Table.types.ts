import { BulmaComponentPropsWithoutRef, Is, OneOrMore } from '../types';

export type TableContainerProps = Omit<
    BulmaComponentPropsWithoutRef<'div'>,
    'textColor' | 'backgroundColor' | 'fontAlignment'
>;

export type TableProps = BulmaComponentPropsWithoutRef<'table'> & {
    /**
     * Either use modifiers to apply styles to the table or use the boolean flag props.
     * Using both will result in duplicate class names (which is ugly HTML but won't affect styling).
     * The lesser used API will be deprecated and removed on release.
     * Who will win? _YOU_ decide!
     */
    modifiers?: OneOrMore<TableModifierOption>;
    isBordered?: boolean;
    isFullwidth?: boolean;
    isStriped?: boolean;
    isNarrow?: boolean;
    isHoverable?: boolean;
};

export type TableHeaderProps = Omit<
    BulmaComponentPropsWithoutRef<'thead'>,
    'textColor' | 'margin' | 'padding' | 'fontAlignment' | 'fontWeight'
>;
export type TableFooterProps = TableHeaderProps;

export type TableBodyProps = Omit<
    BulmaComponentPropsWithoutRef<'tbody'>,
    'margin' | 'padding'
>;

export type TableRowProps = Omit<
    BulmaComponentPropsWithoutRef<'tr'>,
    'margin' | 'padding'
> & {
    isSelected?: boolean;
};

export type TableHeaderCellProps = Omit<
    BulmaComponentPropsWithoutRef<'th'>,
    'margin'
>;
export type TableDataCellProps = TableHeaderCellProps;

export type TableModifierOption = Is<
    'bordered' | 'striped' | 'narrow' | 'hoverable' | 'fullwidth'
>;
