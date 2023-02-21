import { uniq } from 'lodash';

const getDate = (payload: string) => {
  const d1 = new Date(Number(payload.replace('\n', '')));
  const d2 = new Date(Number(payload.replace('\n', '')) * 1000);
  if (d1.getFullYear() === 1970) {
    return d2;
  }
  return d1;
};

export const commands = ['encode', 'decode', 'unique', 'deepl', 'wrap', 'sort', 'ts', 'date'] as const;
export type ToolCommands = typeof commands[number];
export const isCommand = (value: string): value is ToolCommands => commands.filter((it) => it === value).length === 1;
export const commandFunction: Record<ToolCommands, (value: string) => string> = {
  encode: (value: string) => Buffer.from(value, 'utf-8').toString('base64'),
  decode: (value: string) => Buffer.from(value, 'base64').toString('utf-8'),
  unique: (value: string) => uniq(value.split('\n')).join('\n'),
  deepl: (value: string) => value,
  wrap: (value: string) =>
    value
      .split('\n')
      .map((it) => `"${it}"`)
      .join(',\n'),
  sort: (value: string) => value.split('\n').sort().join('\n'),
  date: (value: string) => getDate(value).toISOString(),
  ts: (value: string) => Date.parse(value).valueOf().toString(),
};
