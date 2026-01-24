import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreUncheckedCreateNestedManyWithoutEventInputObjectSchema as StoreUncheckedCreateNestedManyWithoutEventInputObjectSchema } from './StoreUncheckedCreateNestedManyWithoutEventInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  slug: z.string(),
  name: z.string(),
  isActive: z.boolean().optional(),
  startedAt: z.coerce.date(),
  finishedAt: z.coerce.date(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  stores: z.lazy(() => StoreUncheckedCreateNestedManyWithoutEventInputObjectSchema).optional()
}).strict();
export const EventUncheckedCreateWithoutAdminsInputObjectSchema: z.ZodType<Prisma.EventUncheckedCreateWithoutAdminsInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUncheckedCreateWithoutAdminsInput>;
export const EventUncheckedCreateWithoutAdminsInputObjectZodSchema = makeSchema();
