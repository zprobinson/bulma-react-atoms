# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.5.3] - 2023-01-24

### Updated

-   `NavbarProps['color']` options now correctly have the `is-` prefix.

## [0.5.2] - 2022-09-01

### Added

-   `DropdownProps` now includes `isUp` which will render the component with the `is-up` class. This will display the `DropdownMenu` _above_ the `DropdownTrigger` rather than below it.
-   Some additional tests were written to ensure correct class rendering behavior of the `Dropdown` component.

## [0.5.1] - 2022-08-12

### Updated

-   `ButtonProps` and `Button` polymorphic behavior widened to include all `React.ElementType` due to errors in the type-narrowing in use in complex molecules.

## [0.5.0] - 2022-08-11

### Added

-   `ButtonProps` is now a polymorphic component with a default tag type set to `<button>`.
    -   You are only able to choose between `<button>` and `<a>` for the dynamic binding
        due to the limits placed on the Bulma CSS library.

### Removed

-   **[BREAKING]** `FormInputProps` no longer includes the `isLoading` prop.
    -   This prop did not interact with the Bulma CSS library.

## [0.4.0] - 2022-06-02

### Added

-   `FormControlProps` now contains an optional `isExpanded` property that will apply the `is-expanded` class to the form control.
-   `FormCheckbox` now forwards a `React.Ref` object into its underlying `<input type="checkbox" />` element.
    -   This component should now be able to be used with `react-hook-form`.
-   `FormRadio` now forwards a `React.Ref` object into its underlying `<input type="radio" />` element.
    -   This component should now be able to be used with `react-hook-form`.

### Updated

-   The `isFullwidth` property on `FormControlProps` is now _deprecated_.
    -   You can still provide it, but it will apply the `is-expanded` class instead of the `is-fullwidth` class.
    -   There were no valid css selectors/style rules that matched `.control.is-fullwidth` in the Bulma source.

## [0.3.0] - 2022-05-20

-   [Update to match new release of Bulma v 0.9.4](https://github.com/jgthms/bulma/blob/master/CHANGELOG.md)

### Added

-   `ButtonProps` now accepts `boolean` flag argument for `is-responsive` styling.
    -   [Will resize buttons proportionally and responsively as media query size thresholds are passed.](https://bulma.io/documentation/elements/button/#responsive-sizes)
    -   Can be used in conjunction with `size: 'is-small' | 'is-normal' | 'is-medium' | 'is-large'` to responsively size proportionally.

### Updated

-   The `FieldLabel` component will automatically render as valid Bulma markup for a horizontal form if nested as a child of a `Field` component that is passed a `isHorizontal={true}` property.
    -   If you wish to create a horizontal field component, the body of the form field must still be rendered manually. See below for the relevant markup (note the nested `Field`):

```tsx
const MyField = () => (
    <Field isHorizontal>
        <FieldLabel>Name</FieldLabel>
        <FieldBody>
            <Field>
                <Control>
                    <Input type="text" />
                </Control>
            </Field>
        </FieldBody>
    </Field>
);
```

-   The `package.json` dependencies have been updated slightly.
    -   `bulma` has been upgraded to `^0.9.4` from `^0.9.3` and is now a `dependency` rather than a `peerDependency`.
        -   You _must_ have the version of `bulma` installed in the calling client or be able to resolve it manually.
-   Note that `react`, `react-dom`, `@types/react`, and `@types/react-dom` dependencies remain unchanged at a `peerDependency` and `devDependency` respectively.
    -   It is up to the calling code to resolve any discrepancies.
    -   `npm` version `7.0.0` and above should attempt to resolve this for you. If you have a lower version, it will warn you during the install that your version is out of date.

## [0.2.0] - 2022-03-07

### Added

-   `TableProps` now accepts `boolean` flag arguments for table styling.
    -   Depending on use, either `modifiers` or the `boolean` flag arguments will be deprecated on release.

### Changed

-   `MenuListItem` is now a polymorphic component with a default tag type set to `<a>`.
-   `PaginationLink` is now a polymorphic component with a default tag type set to `<a>`.
-   `PaginationIncremental` and the derived components `PaginationNext` and `PaginationPrevious` are now polymorphic components with a default tag type set to `<a>`.
-   `BulmaHelpers` has been converted back to a _type_ from an _interface_.
    -   Unfortunately, occasionally the TypeScript compiler isn't able to derive the extended props from BulmaHelpers and apply them to the Component Props. The workaround for this is to reload the developer window, but
        we want to minimize this as much as possible to improve the developer experience while creating components. This has the tradeoff that the error messages will be more verbose as types are fully qualified in their error
        messages rather than concisely referenced by name like interfaces are.

### Removed

-   `TabsLink` component served as a worse API for users using a `TabsListItem` and providing/styling their own child component.
-   `MenuLink` component was removed in favor of using the polymorphic component `MenuListItem`.
-   `CardFooterItemAnchor` was a deprecated component whose implementation could be derived from the polymorphic component `CardFooterItem`.
-   `CardFooterItemParagraph` was a deprecated component whose implementation could be derived from the polymorphic component `CardFooterItem`.

## [0.1.0] - 2022-03-01

### Added

-   `Buttons` component with `ButtonsProps` type now exists, encapsulating the logic for the [Bulma Buttons documentation](https://bulma.io/documentation/elements/button/#list-of-buttons)
-   `Help` component with `FormHelpProps` type now exists, encapsulating hte logic for the [Bulma Form Help documentation](https://bulma.io/documentation/form/general/#complete-form-example)
-   `ButtonProps` now includes `isSelected` prop to allow appropriate usage with `Buttons` and `has-addons`

### Removed

-   `ButtonProps` no longer has `onClick` as a required property
    -   There is no need to force calling code to pass an empty function if they have no use for an `onClick`

## [0.0.3] - 2022-02-28

### Added

-   `useInnerBulmaProps` function to replace the `withBulmaProps` Higher Order Component
-   `.prettierrc` file to standardize formatting for future code contributors.

### Changed

-   `tsconfig` was updated to use strict compilation rules.
-   Every single component that was exporting the component using `withBulmaProps` (i.e. all of them) has been altered to instead use the `useInnerBulmaProps` function.
-   The types for the non-trivial components has been altered in the cases where an additional helper type was required to integrate with the higher order component.
-   The types for Void Function Components has been changed to omit `'children'` from the props object type.

### Removed

-   `withBulmaProps` higher order component has been removed in favor of using the hook internally.
    -   The helper function `withBulmaProps` is no longer exported in the external API to incentivize calling the hook instead.
-   Removed deprecated components whose functionality is covered by the polymorphic component replacements
    -   Dropdown
        -   DropdownDiv.tsx
        -   DropdownAnchor.tsx
    -   Card
        -   CardFooterItemAnchor.tsx
        -   CardFooterItemParagraph.tsx
    -   Navbar
        -   NavbarItemAnchor.tsx
        -   NavbarItemDiv.tsx
    -   Panel
        -   PanelBlockAnchor.tsx
        -   PanelBlockDiv.tsx
        -   PanelBlockLabel.tsx
    -   Tag
        -   TagAnchor.tsx
        -   TagSpan.tsx

## [0.0.2] - 2022-02-22

### Added

-   Changed package name to something more descriptive and pertinent
    -   This is just the atom library, intended for use on either larger scoped component libraries or customized project use
-   Updated url references in the package.json to point at the internal repository instead of Zach's personal private github
-   Updated README.md now that verdaccio internal npm registry is live on [http://icsi-teamsrvr:8081](http://icsi-teamsrvr:8081)
-   Added this CHANGELOG.md

## [0.0.1] - 2022-02-18

### Added

-   Full project scope added to Azure DevOps internal git repository
