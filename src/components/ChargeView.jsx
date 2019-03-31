// @flow
import * as React from 'react';
import * as Blazon from '../Blazon';
// import { ReactComponent as Lion } from '../svg/charges/lion/lion.svg';

const ChargeView: (blazon: Blazon.Charge) => React.Node = ({
    raw,
    name,
    fill,
    attitude
}) => {
    const classList = ['charge', name, fill].join(' ');
    return (
        <div className={classList} alt={raw}>
            {raw}
        </div>
    );
};

export default ChargeView;
