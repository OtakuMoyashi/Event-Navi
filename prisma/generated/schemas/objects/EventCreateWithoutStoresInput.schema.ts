import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { AdminCreateNestedManyWithoutEventInputObjectSchema as AdminCreateNestedManyWithoutEventInputObjectSchema } from './AdminCreateNestedManyWithoutEventInput.schema'

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
  admins: z.lazy(() => AdminCreateNestedManyWithoutEventInputObjectSchema).optional()
}).strict();
export const EventCreateWithoutStoresInputObjectSchema: z.ZodType<Prisma.EventCreateWithoutStoresInput> = makeSchema() as unknown as z.ZodType<Prisma.EventCreateWithoutStoresInput>;
export const EventCreateWithoutStoresInputObjectZodSchema = makeSchema();
