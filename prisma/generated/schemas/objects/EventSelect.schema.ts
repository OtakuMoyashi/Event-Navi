import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreFindManySchema as StoreFindManySchema } from '../findManyStore.schema';
import { AdminFindManySchema as AdminFindManySchema } from '../findManyAdmin.schema';
import { EventCountOutputTypeArgsObjectSchema as EventCountOutputTypeArgsObjectSchema } from './EventCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  slug: z.boolean().optional(),
  name: z.boolean().optional(),
  isActive: z.boolean().optional(),
  startedAt: z.boolean().optional(),
  finishedAt: z.boolean().optional(),
  description: z.boolean().optional(),
  stores: z.union([z.boolean(), z.lazy(() => StoreFindManySchema)]).optional(),
  admins: z.union([z.boolean(), z.lazy(() => AdminFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => EventCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const EventSelectObjectSchema: z.ZodType<Prisma.EventSelect> = makeSchema() as unknown as z.ZodType<Prisma.EventSelect>;
export const EventSelectObjectZodSchema = makeSchema();
