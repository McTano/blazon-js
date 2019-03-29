// @flow
import * as React from 'react';
import * as Blazon from '../Blazon';
// import { ReactComponent as Lion } from '../svg/charges/lion/lion.svg';

const ChargeView: (blazon: Blazon.Charge) => React.Node = ({
    raw,
    name,
    modifiers,
}) => {
    const classList = [
        'charge',
        name,
        ...modifiers.map(c => c.raw),
    ].join(' ');
    return (
        <div className={classList} alt={raw}>
            {raw}
        </div>
    );
};

export default ChargeView;
