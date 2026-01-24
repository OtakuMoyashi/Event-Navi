import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  supabaseUserId: z.literal(true).optional(),
  email: z.literal(true).optional(),
  storeId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const StaffMinAggregateInputObjectSchema: z.ZodType<Prisma.StaffMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.StaffMinAggregateInputType>;
export const StaffMinAggregateInputObjectZodSchema = makeSchema();
