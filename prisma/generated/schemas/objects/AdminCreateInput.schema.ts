import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { AdminRoleSchema } from '../enums/AdminRole.schema';
import { EventCreateNestedOneWithoutAdminsInputObjectSchema as EventCreateNestedOneWithoutAdminsInputObjectSchema } from './EventCreateNestedOneWithoutAdminsInput.schema';
import { StoreCreateNestedOneWithoutAdminsInputObjectSchema as StoreCreateNestedOneWithoutAdminsInputObjectSchema } from './StoreCreateNestedOneWithoutAdminsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  supabaseUserId: z.string(),
  email: z.string(),
  name: z.string().optional().nullable(),
  role: AdminRoleSchema,
  createdAt: z.coerce.date().optional(),
  event: z.lazy(() => EventCreateNestedOneWithoutAdminsInputObjectSchema).optional(),
  store: z.lazy(() => StoreCreateNestedOneWithoutAdminsInputObjectSchema).optional()
}).strict();
export const AdminCreateInputObjectSchema: z.ZodType<Prisma.AdminCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AdminCreateInput>;
export const AdminCreateInputObjectZodSchema = makeSchema();
