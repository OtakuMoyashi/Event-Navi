import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { AdminRoleSchema } from '../enums/AdminRole.schema';
import { StoreCreateNestedOneWithoutAdminsInputObjectSchema as StoreCreateNestedOneWithoutAdminsInputObjectSchema } from './StoreCreateNestedOneWithoutAdminsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  supabaseUserId: z.string(),
  email: z.string(),
  name: z.string().max(20).optional().nullable(),
  role: AdminRoleSchema,
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  store: z.lazy(() => StoreCreateNestedOneWithoutAdminsInputObjectSchema).optional()
}).strict();
export const AdminCreateWithoutEventInputObjectSchema: z.ZodType<Prisma.AdminCreateWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.AdminCreateWithoutEventInput>;
export const AdminCreateWithoutEventInputObjectZodSchema = makeSchema();
