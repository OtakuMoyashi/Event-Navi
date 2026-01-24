import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { AdminUncheckedCreateNestedManyWithoutEventInputObjectSchema as AdminUncheckedCreateNestedManyWithoutEventInputObjectSchema } from './AdminUncheckedCreateNestedManyWithoutEventInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  slug: z.string(),
  name: z.string(),
  isActive: z.boolean().optional(),
  startedAt: z.coerce.date().optional().nullable(),
  finishedAt: z.coerce.date().optional().nullable(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  admins: z.lazy(() => AdminUncheckedCreateNestedManyWithoutEventInputObjectSchema).optional()
}).strict();
export const EventUncheckedCreateWithoutStoresInputObjectSchema: z.ZodType<Prisma.EventUncheckedCreateWithoutStoresInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUncheckedCreateWithoutStoresInput>;
export const EventUncheckedCreateWithoutStoresInputObjectZodSchema = makeSchema();
