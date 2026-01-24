import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreWhereInputObjectSchema as StoreWhereInputObjectSchema } from './StoreWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StoreWhereInputObjectSchema).optional()
}).strict();
export const EventCountOutputTypeCountStoresArgsObjectSchema = makeSchema();
export const EventCountOutputTypeCountStoresArgsObjectZodSchema = makeSchema();
