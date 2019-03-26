// @flow

export const parse = (b: string) => {
    const parts = b.split(',');
    return { raw: b, field: parseField(parts[0]), charges: parseCharges(parts.slice(1)) };
};

const parseField = (fieldExpr: string) => ({
    raw: fieldExpr,
    tincture: fieldExpr,
});

const parseCharges = (charges) => {
    return charges.map<Charge>((chargeExpr) => {
        const raw = chargeExpr;
        const parts = chargeExpr.trim().split(' ');
        const number = parts[0];
        const name = parts[1];
        const modifiers = parts.slice(2).map((modifierExpr) => ({
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
    modifiers: Array<Modifier>,
    // func: (Shield) => Shield,
};

export type Modifier = {
    raw: string,
    // func: (Charge) => Charge,
};
