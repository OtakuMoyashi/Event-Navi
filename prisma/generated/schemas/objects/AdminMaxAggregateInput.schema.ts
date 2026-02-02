import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  supabaseUserId: z.literal(true).optional(),
  email: z.literal(true).optional(),
  name: z.literal(true).optional(),
  role: z.literal(true).optional(),
  eventId: z.literal(true).optional(),
  storeId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const AdminMaxAggregateInputObjectSchema: z.ZodType<Prisma.AdminMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AdminMaxAggregateInputType>;
export const AdminMaxAggregateInputObjectZodSchema = makeSchema();
