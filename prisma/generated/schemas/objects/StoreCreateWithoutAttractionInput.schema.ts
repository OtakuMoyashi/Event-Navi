import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreTypeSchema } from '../enums/StoreType.schema';
import { FoodCreateNestedOneWithoutStoreInputObjectSchema as FoodCreateNestedOneWithoutStoreInputObjectSchema } from './FoodCreateNestedOneWithoutStoreInput.schema';
import { EventCreateNestedOneWithoutStoresInputObjectSchema as EventCreateNestedOneWithoutStoresInputObjectSchema } from './EventCreateNestedOneWithoutStoresInput.schema';
import { AdminCreateNestedManyWithoutStoreInputObjectSchema as AdminCreateNestedManyWithoutStoreInputObjectSchema } from './AdminCreateNestedManyWithoutStoreInput.schema';
import { StaffCreateNestedManyWithoutStoreInputObjectSchema as StaffCreateNestedManyWithoutStoreInputObjectSchema } from './StaffCreateNestedManyWithoutStoreInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  slug: z.string().max(20),
  name: z.string().max(20),
  isActive: z.boolean().optional(),
  startedAt: z.coerce.date().optional().nullable(),
  finishedAt: z.coerce.date().optional().nullable(),
  description: z.string().optional().nullable(),
  storeType: StoreTypeSchema,
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  food: z.lazy(() => FoodCreateNestedOneWithoutStoreInputObjectSchema).optional(),
  event: z.lazy(() => EventCreateNestedOneWithoutStoresInputObjectSchema).optional(),
  admins: z.lazy(() => AdminCreateNestedManyWithoutStoreInputObjectSchema).optional(),
  staffs: z.lazy(() => StaffCreateNestedManyWithoutStoreInputObjectSchema).optional()
}).strict();
export const StoreCreateWithoutAttractionInputObjectSchema: z.ZodType<Prisma.StoreCreateWithoutAttractionInput> = makeSchema() as unknown as z.ZodType<Prisma.StoreCreateWithoutAttractionInput>;
export const StoreCreateWithoutAttractionInputObjectZodSchema = makeSchema();
