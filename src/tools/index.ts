import type { Alfred } from '../types/types';
import { alfredHandler } from '../types/types';
import { getInput } from '../utility/utility';

import { commands } from './commands';

const handleInput = () => {
  const textInput = getInput()[0];

  const input = process.env.input ?? '';

  const tools = commands.filter((it) => (textInput ? it.includes(textInput) : true));
  const items: Alfred[] = tools.map((it) => ({
    uid: it,
    title: it,
    arg: it,
    subtitle: `will perform ${it}: ${input ?? ''}`,
    icon: { path: '' },
  }));

  alfredHandler(items);
};

handleInput();
