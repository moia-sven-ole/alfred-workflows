/* eslint-disable @typescript-eslint/no-unsafe-call */
import { copySync, removeSync } from 'fs-extra';

const HOME = process.env.HOME ?? '';
const copy = (value: string) => {
  copySync(
    `./${value}`,
    `${HOME}/Library/Application Support/Alfred/Alfred.alfredpreferences/workflows/user.workflow.48E7B893-FF14-4970-BC01-9C7C7EED9841/${value}`,
  );
};

const remove = (value: string) => {
  removeSync(
    `${HOME}/Library/Application Support/Alfred/Alfred.alfredpreferences/workflows/user.workflow.48E7B893-FF14-4970-BC01-9C7C7EED9841/${value}`,
  );
};
copy('build');
copy('assets');
remove('node_modules');
copy('node_modules');
copy('config');
