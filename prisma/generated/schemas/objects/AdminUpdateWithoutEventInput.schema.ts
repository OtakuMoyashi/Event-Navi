import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { AdminRoleSchema } from '../enums/AdminRole.schema';
import { EnumAdminRoleFieldUpdateOperationsInputObjectSchema as EnumAdminRoleFieldUpdateOperationsInputObjectSchema } from './EnumAdminRoleFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { StoreUpdateOneWithoutAdminsNestedInputObjectSchema as StoreUpdateOneWithoutAdminsNestedInputObjectSchema } from './StoreUpdateOneWithoutAdminsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  supabaseUserId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string().max(20), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  role: z.union([AdminRoleSchema, z.lazy(() => EnumAdminRoleFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  store: z.lazy(() => StoreUpdateOneWithoutAdminsNestedInputObjectSchema).optional()
}).strict();
export const AdminUpdateWithoutEventInputObjectSchema: z.ZodType<Prisma.AdminUpdateWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.AdminUpdateWithoutEventInput>;
export const AdminUpdateWithoutEventInputObjectZodSchema = makeSchema();
