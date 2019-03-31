// @flow
import { Map, get, set, setIn } from 'immutable';

export const parseBlazon: string => Shield = (b: string) => {
    const phrases = b.split(',');
    return {
        type: 'Shield',
        raw: b,
        fill: parseField(phrases[0]),
        charges: parseCharges(phrases.slice(1))
    };
};

// const applyModifiers = <T>(
//     initialValue: T,
//     modifiers: Array<(T) => T>,
// ) =>
//     modifiers.reduce(
//         (acc, modifier) => lookup(modifier)(acc),
//         initialValue,
//     );

const parseField: string => Field = fieldExpr => {
    // raw: fieldExpr,
    // tincture: fieldExpr,
    return fieldExpr;
};

const parseCharges: (Array<string>) => Array<Charge> = charges => {
    return charges.map<Charge>(chargeExpr => {
        const raw = chargeExpr;
        const words = chargeExpr.trim().split(' ');
        const number = words[0];
        const name = words[1];
        const basicCharge: Charge = {
            type: 'Charge',
            raw,
            number,
            name
        };
        return words
            .slice(2)
            .reduce<Charge>(
                (charge: Charge, modifierExpr) =>
                    lookupCharge(modifierExpr)(charge),
                basicCharge
            );
    });
};

export type Shield = {
    type: 'Shield',
    raw: string,
    fill?: Field,
    charges: Array<Charge>
};

export type Field = Tincture;

export type Charge = {
    type: 'Charge',
    raw: string,
    name: string,
    number?: string,
    fill?: string,
    attitude?: string
    // func: (Shield) => Shield,
};

const TINCTURES = [
    'OR',
    'GULES',
    'SABLE',
    'ARGENT',
    'PURPURE',
    'AZURE',
    'VERT'
];

export const TINCTURE_FUNCTIONS = TINCTURES.reduce(
    (acc: Map<Tincture, (Element) => Element>, name: Tincture | string) =>
        set(acc, name, el => set(el, 'fill', name)),
    new Map()
);

type Element = Shield | Charge;

type Tincture = $Keys<typeof TINCTURE_FUNCTIONS>;

const Lexicon: Map<string, ?(Element) => Element> = TINCTURE_FUNCTIONS;

const lookup: string => Element => Element = name =>
    get(Lexicon, name.toUpperCase(), (s: Element) => s);

const lookupCharge: string => Charge => Charge = name =>
    get(Lexicon, name, (s: Charge) => s);

export const exampleShield = {
    type: 'Shield',
    field: 'or',
    charges: [
        {
            kind: 'lion',
            tincture: 'gules'
        }
    ]
};
