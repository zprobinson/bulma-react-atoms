import React from 'react';
import { foldClassNames } from '../utilities/listUtils';
import { useInnerBulmaProps } from '../utilities/propUtilities';
import { TabsLinkProps } from './Tabs.types';

const TabsLink: React.FC<TabsLinkProps> = ({
    isActive = false,
    innerListItemProps,
    ...props
}) => {
    const { classNames: anchorClassNames, rest } = useInnerBulmaProps(props);
    const { className: liClassName = '', ...liProps } =
        innerListItemProps ?? {};
    const listItemClassNames = foldClassNames([
        liClassName ?? '',
        isActive ? 'is-active' : '',
    ]);

    return (
        <li data-testid="TabsLink" className={listItemClassNames} {...liProps}>
            <a
                data-testid="TabsLinkAnchor"
                className={anchorClassNames}
                {...rest}
            ></a>
        </li>
    );
};

export default TabsLink;
