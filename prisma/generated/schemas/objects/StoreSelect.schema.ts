import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { AttractionArgsObjectSchema as AttractionArgsObjectSchema } from './AttractionArgs.schema';
import { FoodArgsObjectSchema as FoodArgsObjectSchema } from './FoodArgs.schema';
import { EventArgsObjectSchema as EventArgsObjectSchema } from './EventArgs.schema';
import { AdminFindManySchema as AdminFindManySchema } from '../findManyAdmin.schema';
import { StaffFindManySchema as StaffFindManySchema } from '../findManyStaff.schema';
import { StoreCountOutputTypeArgsObjectSchema as StoreCountOutputTypeArgsObjectSchema } from './StoreCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  slug: z.boolean().optional(),
  name: z.boolean().optional(),
  isActive: z.boolean().optional(),
  startedAt: z.boolean().optional(),
  finishedAt: z.boolean().optional(),
  description: z.boolean().optional(),
  storeType: z.boolean().optional(),
  attraction: z.union([z.boolean(), z.lazy(() => AttractionArgsObjectSchema)]).optional(),
  food: z.union([z.boolean(), z.lazy(() => FoodArgsObjectSchema)]).optional(),
  event: z.union([z.boolean(), z.lazy(() => EventArgsObjectSchema)]).optional(),
  eventId: z.boolean().optional(),
  admins: z.union([z.boolean(), z.lazy(() => AdminFindManySchema)]).optional(),
  staffs: z.union([z.boolean(), z.lazy(() => StaffFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => StoreCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const StoreSelectObjectSchema: z.ZodType<Prisma.StoreSelect> = makeSchema() as unknown as z.ZodType<Prisma.StoreSelect>;
export const StoreSelectObjectZodSchema = makeSchema();
