import type { GenerateOptions } from 'generate-password';
import { generateMultiple } from 'generate-password';

import { pwgenIcon } from '../config/config';
import type { Alfred } from '../types/types';
import { alfredHandler } from '../types/types';

const handleItems = (input: string[]) => {
  const length = parseInt(input[2], 10);
  const options: GenerateOptions = {
    symbols: true,
    numbers: true,
    lowercase: true,
    uppercase: true,
    strict: true,
    length,
  };

  if ((options.length ?? 20) < 10) {
    options.length = 10;
  }

  const result = generateMultiple(30, options);
  const items: Alfred[] = result.map((it) => ({
    uid: it,
    title: it,
    arg: it,
    subtitle: `password length ${options.length ?? 20}`,
    icon: { path: pwgenIcon },
  }));
  alfredHandler(items);
};

handleItems(process.argv);
