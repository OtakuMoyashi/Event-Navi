import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { EventCountOutputTypeCountStoresArgsObjectSchema as EventCountOutputTypeCountStoresArgsObjectSchema } from './EventCountOutputTypeCountStoresArgs.schema';
import { EventCountOutputTypeCountAdminsArgsObjectSchema as EventCountOutputTypeCountAdminsArgsObjectSchema } from './EventCountOutputTypeCountAdminsArgs.schema'

const makeSchema = () => z.object({
  stores: z.union([z.boolean(), z.lazy(() => EventCountOutputTypeCountStoresArgsObjectSchema)]).optional(),
  admins: z.union([z.boolean(), z.lazy(() => EventCountOutputTypeCountAdminsArgsObjectSchema)]).optional()
}).strict();
export const EventCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.EventCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.EventCountOutputTypeSelect>;
export const EventCountOutputTypeSelectObjectZodSchema = makeSchema();
