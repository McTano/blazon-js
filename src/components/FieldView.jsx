// @flow
import * as React from 'react';

const FieldView: ({
    children?: React.Node,
    tincture: string
}) => React.Node = ({ children, tincture }) => (
    <div className={`field ${tincture || 'proper'}`}>{children}</div>
);

export default FieldView;
