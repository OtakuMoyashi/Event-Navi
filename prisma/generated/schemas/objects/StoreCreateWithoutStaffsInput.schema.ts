import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreTypeSchema } from '../enums/StoreType.schema';
import { AttractionCreateNestedOneWithoutStoreInputObjectSchema as AttractionCreateNestedOneWithoutStoreInputObjectSchema } from './AttractionCreateNestedOneWithoutStoreInput.schema';
import { FoodCreateNestedOneWithoutStoreInputObjectSchema as FoodCreateNestedOneWithoutStoreInputObjectSchema } from './FoodCreateNestedOneWithoutStoreInput.schema';
import { EventCreateNestedOneWithoutStoresInputObjectSchema as EventCreateNestedOneWithoutStoresInputObjectSchema } from './EventCreateNestedOneWithoutStoresInput.schema';
import { AdminCreateNestedManyWithoutStoreInputObjectSchema as AdminCreateNestedManyWithoutStoreInputObjectSchema } from './AdminCreateNestedManyWithoutStoreInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  slug: z.string(),
  name: z.string(),
  isActive: z.boolean().optional(),
  startedAt: z.coerce.date().optional().nullable(),
  finishedAt: z.coerce.date().optional().nullable(),
  description: z.string().optional().nullable(),
  storeType: StoreTypeSchema,
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  attraction: z.lazy(() => AttractionCreateNestedOneWithoutStoreInputObjectSchema).optional(),
  food: z.lazy(() => FoodCreateNestedOneWithoutStoreInputObjectSchema).optional(),
  event: z.lazy(() => EventCreateNestedOneWithoutStoresInputObjectSchema).optional(),
  admins: z.lazy(() => AdminCreateNestedManyWithoutStoreInputObjectSchema).optional()
}).strict();
export const StoreCreateWithoutStaffsInputObjectSchema: z.ZodType<Prisma.StoreCreateWithoutStaffsInput> = makeSchema() as unknown as z.ZodType<Prisma.StoreCreateWithoutStaffsInput>;
export const StoreCreateWithoutStaffsInputObjectZodSchema = makeSchema();
