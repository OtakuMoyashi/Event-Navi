import * as z from 'zod';
import { StoreTypeSchema } from '../enums/StoreType.schema';

export const StoreSchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  isActive: z.boolean(),
  startedAt: z.date().nullish(),
  finishedAt: z.date().nullish(),
  description: z.string().nullish(),
  storeType: StoreTypeSchema,
  eventId: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type StoreType = z.infer<typeof StoreSchema>;
