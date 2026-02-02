import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { AdminWhereInputObjectSchema as AdminWhereInputObjectSchema } from './AdminWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AdminWhereInputObjectSchema).optional()
}).strict();
export const EventCountOutputTypeCountAdminsArgsObjectSchema = makeSchema();
export const EventCountOutputTypeCountAdminsArgsObjectZodSchema = makeSchema();
