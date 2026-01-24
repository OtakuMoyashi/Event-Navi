import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { StoreTypeSchema } from '../enums/StoreType.schema';
import { EnumStoreTypeFieldUpdateOperationsInputObjectSchema as EnumStoreTypeFieldUpdateOperationsInputObjectSchema } from './EnumStoreTypeFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { AttractionUncheckedUpdateOneWithoutStoreNestedInputObjectSchema as AttractionUncheckedUpdateOneWithoutStoreNestedInputObjectSchema } from './AttractionUncheckedUpdateOneWithoutStoreNestedInput.schema';
import { FoodUncheckedUpdateOneWithoutStoreNestedInputObjectSchema as FoodUncheckedUpdateOneWithoutStoreNestedInputObjectSchema } from './FoodUncheckedUpdateOneWithoutStoreNestedInput.schema';
import { AdminUncheckedUpdateManyWithoutStoreNestedInputObjectSchema as AdminUncheckedUpdateManyWithoutStoreNestedInputObjectSchema } from './AdminUncheckedUpdateManyWithoutStoreNestedInput.schema';
import { StaffUncheckedUpdateManyWithoutStoreNestedInputObjectSchema as StaffUncheckedUpdateManyWithoutStoreNestedInputObjectSchema } from './StaffUncheckedUpdateManyWithoutStoreNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  isActive: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  startedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  finishedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  storeType: z.union([StoreTypeSchema, z.lazy(() => EnumStoreTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  attraction: z.lazy(() => AttractionUncheckedUpdateOneWithoutStoreNestedInputObjectSchema).optional(),
  food: z.lazy(() => FoodUncheckedUpdateOneWithoutStoreNestedInputObjectSchema).optional(),
  admins: z.lazy(() => AdminUncheckedUpdateManyWithoutStoreNestedInputObjectSchema).optional(),
  staffs: z.lazy(() => StaffUncheckedUpdateManyWithoutStoreNestedInputObjectSchema).optional()
}).strict();
export const StoreUncheckedUpdateWithoutEventInputObjectSchema: z.ZodType<Prisma.StoreUncheckedUpdateWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.StoreUncheckedUpdateWithoutEventInput>;
export const StoreUncheckedUpdateWithoutEventInputObjectZodSchema = makeSchema();
