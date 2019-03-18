// @flow
import * as React from 'react';

const Field: ({ children?: React.Node, tincture: string }) => React.Node = ({
    children,
    tincture,
}) => <div className={`field ${tincture || 'proper'}`}>{children}</div>;

export default Field;
