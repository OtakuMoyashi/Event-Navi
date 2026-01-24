import * as z from 'zod';

export const EventSchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  isActive: z.boolean(),
  startedAt: z.date(),
  finishedAt: z.date(),
  description: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type EventType = z.infer<typeof EventSchema>;
