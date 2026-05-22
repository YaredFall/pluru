# @yaredfall/pluru

Pluralization for Russian words.

## Installation

```bash
pnpm add @yaredfall/pluru
# or
npm install @yaredfall/pluru
# or
yarn add @yaredfall/pluru
```

## Usage

### Nouns

For nouns, you can use either 2-form or 3-form pluralization:

#### Two forms (one/many)

```typescript
import { pluralize } from '@yaredfall/pluru';

const one = 'Скачать файл';
const many = 'Скачать файлы';

pluralize(1, one, many);  // "Скачать файл"
pluralize(2, one, many);  // "Скачать файлы"
```

#### Three forms (one/few/many)

```typescript
import { pluralize } from '@yaredfall/pluru';

// You can use templates - %d will be replaced with the number
const one = '%d файл';
const few = '%d файла';
const many = '%d файлов';

pluralize(1, one, few, many);   // "1 файл"
pluralize(2, one, few, many);   // "2 файла"
pluralize(5, one, few, many);   // "5 файлов"
pluralize(21, one, few, many);  // "21 файл"
pluralize(0, one, few, many);  // "0 файлов"
```

### Verbs

For verbs, use `pluralizeVerb` with 3 forms:

```typescript
import { pluralizeVerb } from '@yaredfall/pluru';

const one = 'Нашлась %d';
const few = 'Нашлись %d';
const many = 'Нашлось %d';

pluralizeVerb(1, one, few, many);     // "Нашлась 1"
pluralizeVerb(2, one, few, many);     // "Нашлись 2"
pluralizeVerb(5, one, few, many);     // "Нашлось 5"
pluralizeVerb(1000, one, few, many);  // "Нашлась 1000"
pluralizeVerb(2000, one, few, many);  // "Нашлись 2000"
```

### Templating

Use `%d` in your form strings to insert the number:

```typescript
const count = 3;

const verb = pluralizeVerb(count, 'Нашелся', 'Нашлось');
const noun = pluralize(count, 'файл', 'файла', 'файлов');

`${verb} ${count} ${noun}` // "Нашлось 3 файла"
```
