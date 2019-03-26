// @flow
import * as React from 'react';

import FieldView from './FieldView';
import ChargeView from './ChargeView';

import * as Blazon from '../Blazon';

const ShieldView: ({ blazon: Blazon.Shield }) => React.Node = ({
    blazon: { raw, field, charges },
}) => (
    <div className="shield" alt={raw}>
        <FieldView tincture={field}>
            {charges.map((charge) => (
                <ChargeView {...charge} />
            ))}
        </FieldView>
    </div>
);

export default ShieldView;
