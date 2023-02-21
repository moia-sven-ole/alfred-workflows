import { getInput } from '../utility/utility';

import { commandFunction, isCommand } from './commands';

const handleInput = () => {
  const textInput = getInput()[0];
  const input = process.env.input ?? '';
  const command = isCommand(textInput) ? textInput : undefined;
  console.log(command ? commandFunction[command](input) : undefined);
};

handleInput();
