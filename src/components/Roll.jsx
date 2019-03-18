// @flow
import * as React from 'react';
import * as Blazon from '../Blazon';
import ShieldView from './ShieldView';

const Roll = ({ roll }: { roll: Array<Blazon.Shield> }) => (
    <div className="roll">
        {roll.map<React.Node>((blazon: Blazon.Shield) => (
            <ShieldView blazon={blazon} />
        ))}
    </div>
);

export default Roll;
