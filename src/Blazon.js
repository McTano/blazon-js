// @flow

export const parse = (b: string) => {
    const parts = b.split(',');
    return { raw: b, tincture: parts[0], charges: parseCharges(parts.slice(1)) };
};

const parseCharges = (charges) => {
    return charges.map<Charge>((charge) => {
        const raw = charge;
        const parts = charge.trim().split(' ');
        const number = parts[0];
        const name = parts[1];
        const modifiers = parts.slice(2);
        return { raw, name, modifiers };
    });
};

export type Shield = {
    raw: string,
    tincture: string,
    charges: Array<Charge>,
};

export type Charge = {
    raw: string,
    name: string,
    modifiers: Array<string>,
};
