import * as fs from 'fs';

import { z } from 'zod';

import { cmdIcon } from '../config/config';
import type { Alfred } from '../types/types';
import { alfredHandler } from '../types/types';

const commandSchema = z.object({
  title: z.string(),
  arg: z.string(),
});

const handleInput = (argv: string[]) => {
  const plainConfig: unknown = JSON.parse(fs.readFileSync(`./config/commands.json`, 'utf-8'));
  if (!(plainConfig instanceof Array)) return;
  const config = plainConfig.map((item) => commandSchema.parse(item));
  // TODO use filter function
  const input = argv[2]?.toLowerCase();
  const input2 = argv[3]?.toLowerCase();
  const input3 = argv[4]?.toLowerCase();

  const items: Alfred[] = config
    .map((it) => ({
      uid: it.title?.toLowerCase(),
      title: it.title,
      arg: it.arg,
      subtitle: it.arg,
      icon: { path: cmdIcon },
    }))
    .filter((it) => (input ? it.uid.includes(input) : true))
    .filter((it) => (input2 ? it.uid.includes(input2) : true))
    .filter((it) => (input3 ? it.uid.includes(input3) : true));

  alfredHandler(items);
};

handleInput(process.argv);
