import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreCreateNestedOneWithoutStaffsInputObjectSchema as StoreCreateNestedOneWithoutStaffsInputObjectSchema } from './StoreCreateNestedOneWithoutStaffsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  supabaseUserId: z.string(),
  email: z.string(),
  createdAt: z.coerce.date().optional(),
  store: z.lazy(() => StoreCreateNestedOneWithoutStaffsInputObjectSchema)
}).strict();
export const StaffCreateInputObjectSchema: z.ZodType<Prisma.StaffCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.StaffCreateInput>;
export const StaffCreateInputObjectZodSchema = makeSchema();
