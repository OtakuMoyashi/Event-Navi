import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreFindManySchema as StoreFindManySchema } from '../findManyStore.schema';
import { AdminFindManySchema as AdminFindManySchema } from '../findManyAdmin.schema';
import { EventCountOutputTypeArgsObjectSchema as EventCountOutputTypeArgsObjectSchema } from './EventCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  stores: z.union([z.boolean(), z.lazy(() => StoreFindManySchema)]).optional(),
  admins: z.union([z.boolean(), z.lazy(() => AdminFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => EventCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const EventIncludeObjectSchema: z.ZodType<Prisma.EventInclude> = makeSchema() as unknown as z.ZodType<Prisma.EventInclude>;
export const EventIncludeObjectZodSchema = makeSchema();
