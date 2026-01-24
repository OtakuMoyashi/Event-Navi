import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { StoreUpdateOneRequiredWithoutStaffsNestedInputObjectSchema as StoreUpdateOneRequiredWithoutStaffsNestedInputObjectSchema } from './StoreUpdateOneRequiredWithoutStaffsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  supabaseUserId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  store: z.lazy(() => StoreUpdateOneRequiredWithoutStaffsNestedInputObjectSchema).optional()
}).strict();
export const StaffUpdateInputObjectSchema: z.ZodType<Prisma.StaffUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.StaffUpdateInput>;
export const StaffUpdateInputObjectZodSchema = makeSchema();
