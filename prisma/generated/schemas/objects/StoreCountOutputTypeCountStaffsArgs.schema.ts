import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StaffWhereInputObjectSchema as StaffWhereInputObjectSchema } from './StaffWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StaffWhereInputObjectSchema).optional()
}).strict();
export const StoreCountOutputTypeCountStaffsArgsObjectSchema = makeSchema();
export const StoreCountOutputTypeCountStaffsArgsObjectZodSchema = makeSchema();
