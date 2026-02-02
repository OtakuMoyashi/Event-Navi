import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreCreateNestedManyWithoutEventInputObjectSchema as StoreCreateNestedManyWithoutEventInputObjectSchema } from './StoreCreateNestedManyWithoutEventInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  slug: z.string(),
  name: z.string().max(20),
  isActive: z.boolean().optional(),
  startedAt: z.coerce.date().optional().nullable(),
  finishedAt: z.coerce.date().optional().nullable(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  stores: z.lazy(() => StoreCreateNestedManyWithoutEventInputObjectSchema).optional()
}).strict();
export const EventCreateWithoutAdminsInputObjectSchema: z.ZodType<Prisma.EventCreateWithoutAdminsInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCreateWithoutAdminsInput>;
export const EventCreateWithoutAdminsInputObjectZodSchema = makeSchema();
