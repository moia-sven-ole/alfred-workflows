import * as z from 'zod';

const brave = z.literal('BRAVE');
const grafana = z.literal('GRAFANA');
const kibana = z.literal('KIBANA');

export const configSchema = z.object({
  title: z.string(),
  arg: z.string(),
  icon: z.union([brave, kibana, grafana]),
});

export type Config = z.infer<typeof configSchema>;

export const alfredSchema = z.object({
  uid: z.string(),
  title: z.string(),
  subtitle: z.string(),
  icon: z.object({
    path: z.string(),
  }),
  text: z
    .object({
      copy: z.string(),
    })
    .optional(),
  arg: z.string(),
});
export type Alfred = z.infer<typeof alfredSchema>;

export const alfredHandler = (items: Alfred[]) => {
  console.log(JSON.stringify({ items }));
};
