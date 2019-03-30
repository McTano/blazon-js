// @flow
import { set } from 'immutable';

export const parse = (b: string) => {
    const parts = b.split(',');
    return {
        raw: b,
        field: parseField(parts[0]),
        charges: parseCharges(parts.slice(1)),
    };
};

const parseField = (fieldExpr: string) => ({
    raw: fieldExpr,
    tincture: fieldExpr,
});

const parseCharges = charges => {
    return charges.map<Charge>(chargeExpr => {
        const raw = chargeExpr;
        const parts = chargeExpr.trim().split(' ');
        const number = parts[0];
        const name = parts[1];
        const modifiers = parts
            .slice(2)
            .map(modifierExpr => ({
                raw: modifierExpr,
            }));
        return { raw, name, modifiers };
    });
};

export type Shield = {
    raw: string,
    field: Field,
    charges: Array<Charge>,
};

export type Field = {
    raw: string,
    tincture: string,
};

export type Charge = {
    raw: string,
    name: string,
    tincture: string,
    // modifiers: Array<Modifier<Charge>,
    // func: (Shield) => Shield,
};

export type Modifier<T> = {
    raw: string,
    func: T => T,
};

export type Builder<T> = {
    selfApply: SelfApply<T>, // applies function to enclosedState
};

export type SelfApply<T> = ((T) => T) => Builder<T>;

export const newSelfApply = <T>(
    prevState: T,
): SelfApply<T> => {
    return f => {
        const nextState = f(prevState);
        return {
            selfApply: newSelfApply(nextState),
        };
    };
};

export const emptyShield: Builder<Shield> = {
    selfApply: newSelfApply<Shield>({}),
};

// type Tincture =
//     | 'OR'
//     | 'GULES'
//     | 'SABLE'
//     | 'ARGENT'
//     | 'PURPURE'
//     | 'AZURE'
//     | 'VERT';

const TINCTURES = [
    'OR',
    'GULES',
    'SABLE',
    'ARGENT',
    'PURPURE',
    'AZURE',
    'VERT',
];

type Tincture = $Keys<typeof TINCTURE_FUNCTIONS>;

const TINCTURE_FUNCTIONS = TINCTURES.reduce(
    (
        acc: Map<Tincture, (Shield) => Shield>,
        name: Tincture,
    ) =>
        set(acc, name, shield =>
            set(shield, 'tincture', name),
        ),
    {},
);

// (shield or (a (lion gules)))
// emptyShield.selfApply(or).selfApply((a (lion gules)))
// {field: or}.selfApply((lion gules))
// Something a bit off here, lion should be a builder until it finishes building,
// then it should return a function.
// {field: or}.selfApply(emptyCharge.selfApply(lion).selfApply(gules))
// {field: or}.selfApply({kind: lion}.selfApply(gules))
// {field: or}.selfApply({kind: lion, tincture: gules})
export const exampleShield = {
    field: 'or',
    charges: [
        {
            kind: 'lion',
            tincture: 'gules',
        },
    ],
};
