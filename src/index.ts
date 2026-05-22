const Form = {
    One: 0,
    Few: 1,
    Many: 2,
} as const;
type Form = (typeof Form)[keyof typeof Form];

type TwoForms = [one: string, many: string];
type ThreeForms = [one: string, few: string, many: string];

function isOne(val: number): boolean {
    return val % 10 === 1 && val % 100 !== 11;
}
function isFew(val: number): boolean {
    return val % 10 >= 2 && val % 10 <= 4 && (val % 100 < 10 || val % 100 >= 20);
}

function getPluralNounForm(val: number): Form {
    if (isOne(val)) return Form.One;
    if (isFew(val)) return Form.Few;
    return Form.Many;
}

function getPluralNoun(val: number, ...forms: TwoForms): string;
function getPluralNoun(val: number, ...forms: ThreeForms): string;
function getPluralNoun(val: number, ...forms: TwoForms | ThreeForms) {
    let form: string;

    if (forms.length === 2) form = val > 1 ? forms[1] : forms[0];
    else if (forms.length === 3) form = forms[getPluralNounForm(val)];
    else throw new Error("Invalid number of arguments");

    return form.replaceAll("%d", val.toString());
}

function getPluralVerbForm(val: number): Form {
    if (val > 1_000_000) return Form.Many;

    if (val > 1_000 && val < 1_000_000 && val % 1_000 === 0) val /= 1000;

    if (isOne(val) || val % 10_000 === 1_000) return Form.One;
    if (isFew(val)) return Form.Few;
    return Form.Many;
}

function getPluralVerb(val: number, ...forms: TwoForms): string;
function getPluralVerb(val: number, ...forms: ThreeForms): string;
function getPluralVerb(val: number, ...forms: TwoForms | ThreeForms) {
    let form: string;

    if (forms.length === 2) form = val > 1 ? forms[1] : forms[0];
    else if (forms.length === 3) form = forms[getPluralVerbForm(val)];
    else throw new Error("Invalid number of arguments");

    return form.replaceAll("%d", val.toString());
}

export { getPluralNoun as pluralize, getPluralVerb as pluralizeVerb };
