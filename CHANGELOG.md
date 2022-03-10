# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
