import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { AttractionArgsObjectSchema as AttractionArgsObjectSchema } from './AttractionArgs.schema';
import { FoodArgsObjectSchema as FoodArgsObjectSchema } from './FoodArgs.schema';
import { EventArgsObjectSchema as EventArgsObjectSchema } from './EventArgs.schema';
import { AdminFindManySchema as AdminFindManySchema } from '../findManyAdmin.schema';
import { StaffFindManySchema as StaffFindManySchema } from '../findManyStaff.schema';
import { StoreCountOutputTypeArgsObjectSchema as StoreCountOutputTypeArgsObjectSchema } from './StoreCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  attraction: z.union([z.boolean(), z.lazy(() => AttractionArgsObjectSchema)]).optional(),
  food: z.union([z.boolean(), z.lazy(() => FoodArgsObjectSchema)]).optional(),
  event: z.union([z.boolean(), z.lazy(() => EventArgsObjectSchema)]).optional(),
  admins: z.union([z.boolean(), z.lazy(() => AdminFindManySchema)]).optional(),
  staffs: z.union([z.boolean(), z.lazy(() => StaffFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => StoreCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const StoreIncludeObjectSchema: z.ZodType<Prisma.StoreInclude> = makeSchema() as unknown as z.ZodType<Prisma.StoreInclude>;
export const StoreIncludeObjectZodSchema = makeSchema();
