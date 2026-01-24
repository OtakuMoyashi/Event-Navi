import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  supabaseUserId: z.string(),
  email: z.string(),
  storeId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const StaffCreateManyInputObjectSchema: z.ZodType<Prisma.StaffCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.StaffCreateManyInput>;
export const StaffCreateManyInputObjectZodSchema = makeSchema();
