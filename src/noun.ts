import { applyTemplate, isFew, isOne, resolveForms } from "./shared";
import type { FormsInput, GetPluralWord } from "./types";

function getPluralForm(val: number, forms: FormsInput) {
    const [one, few, many] = resolveForms(forms);

    if (few === undefined) return val > 1 ? many : one;
    else if (isOne(val)) return one;
    else if (isFew(val)) return few;
    else return many;
}

const pluralize: GetPluralWord = (val: number, ...forms: FormsInput) => {
    return applyTemplate(getPluralForm(val, forms), val);
};

export default pluralize;
