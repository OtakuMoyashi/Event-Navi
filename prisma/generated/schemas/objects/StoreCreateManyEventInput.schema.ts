import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreTypeSchema } from '../enums/StoreType.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  slug: z.string().max(20),
  name: z.string().max(20),
  isActive: z.boolean().optional(),
  startedAt: z.coerce.date().optional().nullable(),
  finishedAt: z.coerce.date().optional().nullable(),
  description: z.string().optional().nullable(),
  storeType: StoreTypeSchema,
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const StoreCreateManyEventInputObjectSchema: z.ZodType<Prisma.StoreCreateManyEventInput> = makeSchema() as unknown as z.ZodType<Prisma.StoreCreateManyEventInput>;
export const StoreCreateManyEventInputObjectZodSchema = makeSchema();
