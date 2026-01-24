import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreUncheckedCreateNestedManyWithoutEventInputObjectSchema as StoreUncheckedCreateNestedManyWithoutEventInputObjectSchema } from './StoreUncheckedCreateNestedManyWithoutEventInput.schema';
import { AdminUncheckedCreateNestedManyWithoutEventInputObjectSchema as AdminUncheckedCreateNestedManyWithoutEventInputObjectSchema } from './AdminUncheckedCreateNestedManyWithoutEventInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  slug: z.string(),
  name: z.string(),
  isActive: z.boolean().optional(),
  startedAt: z.coerce.date(),
  finishedAt: z.coerce.date(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  stores: z.lazy(() => StoreUncheckedCreateNestedManyWithoutEventInputObjectSchema).optional(),
  admins: z.lazy(() => AdminUncheckedCreateNestedManyWithoutEventInputObjectSchema).optional()
}).strict();
export const EventUncheckedCreateInputObjectSchema: z.ZodType<Prisma.EventUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.EventUncheckedCreateInput>;
export const EventUncheckedCreateInputObjectZodSchema = makeSchema();
