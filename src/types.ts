export type TwoForms = [one: string, many: string];
export type ThreeForms = [one: string, few: string, many: string];

export type FormsInput = TwoForms | ThreeForms | [TwoForms] | [ThreeForms];

export interface GetPluralWord {
    (val: number, ...forms: TwoForms): string;
    (val: number, ...forms: ThreeForms): string;
    (val: number, ...forms: [TwoForms]): string;
    (val: number, ...forms: [ThreeForms]): string;
}
