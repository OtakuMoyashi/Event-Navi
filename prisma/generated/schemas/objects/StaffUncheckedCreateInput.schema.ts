import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  supabaseUserId: z.string(),
  email: z.string(),
  storeId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
export const StaffUncheckedCreateInputObjectSchema: z.ZodType<Prisma.StaffUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.StaffUncheckedCreateInput>;
export const StaffUncheckedCreateInputObjectZodSchema = makeSchema();
