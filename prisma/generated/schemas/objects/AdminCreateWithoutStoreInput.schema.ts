import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { AdminRoleSchema } from '../enums/AdminRole.schema';
import { EventCreateNestedOneWithoutAdminsInputObjectSchema as EventCreateNestedOneWithoutAdminsInputObjectSchema } from './EventCreateNestedOneWithoutAdminsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  supabaseUserId: z.string(),
  email: z.string(),
  name: z.string().optional().nullable(),
  role: AdminRoleSchema,
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  event: z.lazy(() => EventCreateNestedOneWithoutAdminsInputObjectSchema).optional()
}).strict();
export const AdminCreateWithoutStoreInputObjectSchema: z.ZodType<Prisma.AdminCreateWithoutStoreInput> = makeSchema() as unknown as z.ZodType<Prisma.AdminCreateWithoutStoreInput>;
export const AdminCreateWithoutStoreInputObjectZodSchema = makeSchema();
