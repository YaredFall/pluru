type TwoForms = [one: string, many: string];
type ThreeForms = [one: string, few: string, many: string];

type FormsInput = TwoForms | ThreeForms;

function isOne(val: number): boolean {
    return val % 10 === 1 && val % 100 !== 11;
}
function isFew(val: number): boolean {
    return val % 10 >= 2 && val % 10 <= 4 && (val % 100 < 10 || val % 100 >= 20);
}

function resolveForms(forms: FormsInput) {
    if (forms.length === 2) return { one: forms[0], many: forms[1] };
    else if (forms.length === 3) return { one: forms[0], few: forms[1], many: forms[2] };

    throw new Error("Invalid number of arguments");
}

function applyTemplate(template: string, val: number) {
    return template.replaceAll("%d", val.toString());
}

function getPluralNounForm(val: number, forms: FormsInput) {
    const { one, few, many } = resolveForms(forms);

    if (few === undefined) return val > 1 ? many : one;
    else if (isOne(val)) return one;
    else if (isFew(val)) return few;
    else return many;
}

function getPluralNoun(val: number, ...forms: TwoForms): string;
function getPluralNoun(val: number, ...forms: ThreeForms): string;
function getPluralNoun(val: number, ...forms: TwoForms | ThreeForms) {
    return applyTemplate(getPluralNounForm(val, forms), val);
}

function getPluralVerbForm(val: number, forms: FormsInput) {
    const { one, few, many } = resolveForms(forms);

    if (few === undefined) return val > 1 ? many : one;
    else if (val > 1_000_000) return many;

    if (val > 1_000 && val < 1_000_000 && val % 1_000 === 0) val /= 1000;

    if (isOne(val) || val % 10_000 === 1_000) return one;
    else if (isFew(val)) return few;
    else return many;
}

function getPluralVerb(val: number, ...forms: TwoForms): string;
function getPluralVerb(val: number, ...forms: ThreeForms): string;
function getPluralVerb(val: number, ...forms: TwoForms | ThreeForms) {
    return applyTemplate(getPluralVerbForm(val, forms), val);
}

export { getPluralNoun as pluralize, getPluralVerb as pluralizeVerb };
