// @flow
import * as React from 'react';
import type { Blazon } from '../Blazon';
import ShieldView from './ShieldView';

const Roll = ({ roll }: { roll: Array<Blazon> }) => (
    <div className="roll">
        {roll.map<React.Node>((blazon: Blazon) => (
            <ShieldView blazon={blazon} />
        ))}
    </div>
);

export default Roll;
