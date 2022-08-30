import _ from 'lodash';

export const getInput = (): string[] => {
  const { argv } = process;
  return argv.slice(2, argv.length);
};

export const getStringInput = (): string => {
  const { argv } = process;
  return argv.slice(2, argv.length).join(' ');
};

export const filterbyInput = (items: string[], filter: string[]): string[] =>
  _.reduce(filter, (accu, next) => accu.filter((it) => it.includes(next)), items);

export const filterItems = (items: string[]): string[] => filterbyInput(items, getInput());
