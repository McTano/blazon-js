// @flow
import * as React from 'react';

import Field from './Field';
import Charge from './Charge';

import * as Blazon from '../Blazon';

const ShieldView: ({ blazon: Blazon.Shield }) => React.Node = ({
    blazon: { raw, tincture, charges },
}) => (
    <div className="shield" alt={raw}>
        <Field tincture={tincture}>
            {charges.map((charge) => (
                <Charge {...charge} />
            ))}
        </Field>
    </div>
);

export default ShieldView;
