// @flow

export const parseBlazon = (b: string) => ({ raw: b, tincture: b.split(',')[0] });

export type Blazon = {
    raw: string,
    tincture: string,
};
