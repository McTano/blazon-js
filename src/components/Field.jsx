// @flow
import React from 'react';

export default ({ tincture }: { tincture: string }) => (
    <div className={`field ${tincture || 'proper'}`}>Charges go here.</div>
);

// export default Field;
