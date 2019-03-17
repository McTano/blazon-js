// @flow
import * as React from 'react';
import Field from './Field';
import type { Blazon } from '../Blazon';

const ShieldView: ({ blazon: Blazon }) => React.Node = ({ blazon }: { blazon: Blazon }) => (
    <div className="shield">
        <Field tincture={blazon.tincture}>
            <div className="charge" />
        </Field>
    </div>
);

export default ShieldView;
