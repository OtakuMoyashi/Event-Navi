import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  supabaseUserId: z.string(),
  email: z.string(),
  name: z.string().max(20).optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const StaffCreateManyStoreInputObjectSchema: z.ZodType<Prisma.StaffCreateManyStoreInput> = makeSchema() as unknown as z.ZodType<Prisma.StaffCreateManyStoreInput>;
export const StaffCreateManyStoreInputObjectZodSchema = makeSchema();
