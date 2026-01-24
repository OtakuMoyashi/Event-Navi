import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { StoreTypeSchema } from '../enums/StoreType.schema';
import { EnumStoreTypeFieldUpdateOperationsInputObjectSchema as EnumStoreTypeFieldUpdateOperationsInputObjectSchema } from './EnumStoreTypeFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { AttractionUpdateOneWithoutStoreNestedInputObjectSchema as AttractionUpdateOneWithoutStoreNestedInputObjectSchema } from './AttractionUpdateOneWithoutStoreNestedInput.schema';
import { FoodUpdateOneWithoutStoreNestedInputObjectSchema as FoodUpdateOneWithoutStoreNestedInputObjectSchema } from './FoodUpdateOneWithoutStoreNestedInput.schema';
import { EventUpdateOneWithoutStoresNestedInputObjectSchema as EventUpdateOneWithoutStoresNestedInputObjectSchema } from './EventUpdateOneWithoutStoresNestedInput.schema';
import { AdminUpdateManyWithoutStoreNestedInputObjectSchema as AdminUpdateManyWithoutStoreNestedInputObjectSchema } from './AdminUpdateManyWithoutStoreNestedInput.schema';
import { StaffUpdateManyWithoutStoreNestedInputObjectSchema as StaffUpdateManyWithoutStoreNestedInputObjectSchema } from './StaffUpdateManyWithoutStoreNestedInput.schema'

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
  attraction: z.lazy(() => AttractionUpdateOneWithoutStoreNestedInputObjectSchema).optional(),
  food: z.lazy(() => FoodUpdateOneWithoutStoreNestedInputObjectSchema).optional(),
  event: z.lazy(() => EventUpdateOneWithoutStoresNestedInputObjectSchema).optional(),
  admins: z.lazy(() => AdminUpdateManyWithoutStoreNestedInputObjectSchema).optional(),
  staffs: z.lazy(() => StaffUpdateManyWithoutStoreNestedInputObjectSchema).optional()
}).strict();
export const StoreUpdateInputObjectSchema: z.ZodType<Prisma.StoreUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.StoreUpdateInput>;
export const StoreUpdateInputObjectZodSchema = makeSchema();
