import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreCountOutputTypeCountAdminsArgsObjectSchema as StoreCountOutputTypeCountAdminsArgsObjectSchema } from './StoreCountOutputTypeCountAdminsArgs.schema';
import { StoreCountOutputTypeCountStaffsArgsObjectSchema as StoreCountOutputTypeCountStaffsArgsObjectSchema } from './StoreCountOutputTypeCountStaffsArgs.schema'

const makeSchema = () => z.object({
  admins: z.union([z.boolean(), z.lazy(() => StoreCountOutputTypeCountAdminsArgsObjectSchema)]).optional(),
  staffs: z.union([z.boolean(), z.lazy(() => StoreCountOutputTypeCountStaffsArgsObjectSchema)]).optional()
}).strict();
export const StoreCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.StoreCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.StoreCountOutputTypeSelect>;
export const StoreCountOutputTypeSelectObjectZodSchema = makeSchema();
