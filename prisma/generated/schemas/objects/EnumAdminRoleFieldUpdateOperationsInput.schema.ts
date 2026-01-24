import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { AdminRoleSchema } from '../enums/AdminRole.schema'

const makeSchema = () => z.object({
  set: AdminRoleSchema.optional()
}).strict();
export const EnumAdminRoleFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumAdminRoleFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumAdminRoleFieldUpdateOperationsInput>;
export const EnumAdminRoleFieldUpdateOperationsInputObjectZodSchema = makeSchema();
