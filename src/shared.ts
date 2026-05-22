import type { FormsInput } from "./types";

export function isOne(val: number): boolean {
    return val % 10 === 1 && val % 100 !== 11;
}
export function isFew(val: number): boolean {
    return val % 10 >= 2 && val % 10 <= 4 && (val % 100 < 10 || val % 100 >= 20);
}

export function resolveForms(forms: FormsInput) {
    if (forms.length === 1) forms = forms[0];

    if (forms.length === 2) return [forms[0], undefined, forms[1]] as const;
    else if (forms.length === 3) return [forms[0], forms[1], forms[2]] as const;

    throw new Error("Invalid number of arguments");
}

export function applyTemplate(template: string, val: number) {
    return template.replaceAll("%d", val.toString());
}
