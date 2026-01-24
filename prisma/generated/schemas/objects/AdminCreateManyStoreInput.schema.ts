import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { AdminRoleSchema } from '../enums/AdminRole.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  supabaseUserId: z.string(),
  email: z.string(),
  name: z.string().optional().nullable(),
  role: AdminRoleSchema,
  eventId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const AdminCreateManyStoreInputObjectSchema: z.ZodType<Prisma.AdminCreateManyStoreInput> = makeSchema() as unknown as z.ZodType<Prisma.AdminCreateManyStoreInput>;
export const AdminCreateManyStoreInputObjectZodSchema = makeSchema();
