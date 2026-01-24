import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  slug: z.string(),
  name: z.string(),
  isActive: z.boolean().optional(),
  startedAt: z.coerce.date(),
  finishedAt: z.coerce.date(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const EventCreateManyInputObjectSchema: z.ZodType<Prisma.EventCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCreateManyInput>;
export const EventCreateManyInputObjectZodSchema = makeSchema();
