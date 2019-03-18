// @flow
import * as React from 'react';
import * as Blazon from '../Blazon';
// import { ReactComponent as Lion } from '../svg/charges/lion/lion.svg';

const Charge: (blazon: Blazon.Charge) => React.Node = ({ raw, name, modifiers }) => {
    const classList = [name, ...modifiers].join(' ');
    // eslint-disable-next-line
    return (
        <div className={classList} alt={raw}>
            {raw}
        </div>
    );
};

export default Charge;
