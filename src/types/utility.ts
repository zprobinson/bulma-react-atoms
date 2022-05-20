import { BulmaHelpers } from './component';
export type OneOrMore<T> = T | T[];

export type PartialReadonly<T> = Partial<Readonly<T>>;

export type Override<T, O> = Omit<T, keyof O> & O;

export type Equals<T, U> = T extends U ? (U extends T ? true : false) : false;

export type Is<TemplateLiteral extends string> = `is-${TemplateLiteral}`;
export type Has<TemplateLiteral extends string> = `has-${TemplateLiteral}`;

export type Polymorphic<
    PolymorphicElement extends React.ElementType = React.ElementType,
    DefaultElement extends React.ElementType = React.ElementType,
    Props extends BulmaHelpers = BulmaHelpers
> = Props &
    Omit<React.ComponentPropsWithoutRef<PolymorphicElement>, keyof Props> &
    (Equals<DefaultElement, PolymorphicElement> extends true
        ? {
              as?: DefaultElement | undefined;
          }
        : {
              as: PolymorphicElement;
          });
