import { atom } from "jotai";

export const priceAtom = atom<string | null>(null);
export const deliveryTimeAtom = atom<string | null>(null);
export const selectedDateAtom = atom<string | null>(null);
export const pageAtom = atom<number>(1);
export const searchAtom = atom<string | number | readonly string[] | undefined>(
  ""
);
