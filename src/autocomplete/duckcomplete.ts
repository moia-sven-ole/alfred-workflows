import axios from 'axios';

import { autocompleteIcon } from '../config/config';
import type { Alfred } from '../types/types';
import { alfredHandler } from '../types/types';
import { getStringInput } from '../utility/utility';

const getSuggestion = async (searchTerm: string): Promise<string[] | undefined> => {
  const encoded = encodeURIComponent(searchTerm);
  const url = `https://duckduckgo.com/ac/?q=${encoded}&type=list`;
  const response = await axios.get<string[][]>(url);
  if (response.status === 200 && response.data.length >= 2) {
    return response.data[1];
  }
  return undefined;
};

const handleItems = async () => {
  const input = getStringInput();
  const result = (await getSuggestion(input)) ?? [];
  const items: Alfred[] = result.map((it) => ({
    uid: it,
    title: it,
    arg: it,
    subtitle: it,
    icon: { path: autocompleteIcon },
  }));
  alfredHandler(items);
};

handleItems().catch((r) => console.log(r));
