import { assert, describe, it } from "vitest";
import { pluralize, pluralizeVerb } from "./index";

describe("pluru", () => {
    it("Zero", () => {
        const one = "%d файл";
        const few = "%d файла";
        const many = "%d файлов";

        assert.equal(pluralize(0, one, many), "0 файл");
        assert.equal(pluralize(0, one, few, many), "0 файлов");
        assert.equal(pluralize(0, [one, few, many]), "0 файлов");
    });

    it("One or many", () => {
        const one = "Скачать файл";
        const many = "Скачать файлы";

        assert.equal(pluralize(1, one, many), one);
        assert.equal(pluralize(2, one, many), many);
        assert.equal(pluralize(10, one, many), many);
        assert.equal(pluralize(21, one, many), many);
        assert.equal(pluralize(21, [one, many]), many);

        assert.equal(pluralize(1, one, many, many), one);
        assert.equal(pluralize(2, one, many, many), many);
        assert.equal(pluralize(3, one, many, many), many);
        assert.equal(pluralize(21, one, many, many), one);
        assert.equal(pluralize(21, [one, many, many]), one);
    });

    it("One, few and many (noun)", () => {
        const one = "Один файл";
        const few = "Два файла";
        const many = "Много файлов";
        assert.equal(pluralize(1, one, few, many), one);
        assert.equal(pluralize(2, one, few, many), few);
        assert.equal(pluralize(3, one, few, many), few);
        assert.equal(pluralize(4, one, few, many), few);
        assert.equal(pluralize(5, one, few, many), many);
        assert.equal(pluralize(5, [one, few, many]), many);
    });

    it("Templating", () => {
        const one = "%d файл %d";
        const few = "%d файла %d";
        const many = "%d файлов %d";

        assert.equal(pluralize(1, one, few, many), "1 файл 1");
        assert.equal(pluralize(2, one, few, many), "2 файла 2");
        assert.equal(pluralize(3, one, few, many), "3 файла 3");
        assert.equal(pluralize(4, one, few, many), "4 файла 4");
        assert.equal(pluralize(5, one, few, many), "5 файлов 5");
        assert.equal(pluralize(101, one, few, many), "101 файл 101");
        assert.equal(pluralize(110, one, few, many), "110 файлов 110");
        assert.equal(pluralize(1000000, one, few, many), "1000000 файлов 1000000");
    });

    it("One, few and many (verb)", () => {
        const one = "Нашлась %d";
        const few = "Нашлись %d";
        const many = "Нашлось %d";
        assert.equal(pluralizeVerb(1, one, few, many), "Нашлась 1");
        assert.equal(pluralizeVerb(2, one, few, many), "Нашлись 2");
        assert.equal(pluralizeVerb(3, one, few, many), "Нашлись 3");
        assert.equal(pluralizeVerb(4, one, few, many), "Нашлись 4");
        assert.equal(pluralizeVerb(5, one, few, many), "Нашлось 5");
        assert.equal(pluralizeVerb(6, one, few, many), "Нашлось 6");
        assert.equal(pluralizeVerb(7, one, few, many), "Нашлось 7");
        assert.equal(pluralizeVerb(8, one, few, many), "Нашлось 8");
        assert.equal(pluralizeVerb(9, one, few, many), "Нашлось 9");
        assert.equal(pluralizeVerb(10, one, few, many), "Нашлось 10");
        assert.equal(pluralizeVerb(11, one, few, many), "Нашлось 11");
        assert.equal(pluralizeVerb(12, one, few, many), "Нашлось 12");
        assert.equal(pluralizeVerb(1_000, one, few, many), "Нашлась 1000");
        assert.equal(pluralizeVerb(21_000, one, few, many), "Нашлась 21000");
        assert.equal(pluralizeVerb(2_000, one, few, many), "Нашлись 2000");
        assert.equal(pluralizeVerb(3_000, one, few, many), "Нашлись 3000");
        assert.equal(pluralizeVerb(4_000, one, few, many), "Нашлись 4000");
        assert.equal(pluralizeVerb(5_000, one, few, many), "Нашлось 5000");
        assert.equal(pluralizeVerb(6_000, one, few, many), "Нашлось 6000");
        assert.equal(pluralizeVerb(7_000, one, few, many), "Нашлось 7000");
        assert.equal(pluralizeVerb(8_000, one, few, many), "Нашлось 8000");
        assert.equal(pluralizeVerb(9_000, one, few, many), "Нашлось 9000");
        assert.equal(pluralizeVerb(10_000, one, few, many), "Нашлось 10000");
        assert.equal(pluralizeVerb(1_000_000, one, few, many), "Нашлось 1000000");
        assert.equal(pluralizeVerb(1_001_000, one, few, many), "Нашлось 1001000");
    });
});
