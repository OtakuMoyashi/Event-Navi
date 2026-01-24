import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreTypeSchema } from '../enums/StoreType.schema';
import { AttractionCreateNestedOneWithoutStoreInputObjectSchema as AttractionCreateNestedOneWithoutStoreInputObjectSchema } from './AttractionCreateNestedOneWithoutStoreInput.schema';
import { FoodCreateNestedOneWithoutStoreInputObjectSchema as FoodCreateNestedOneWithoutStoreInputObjectSchema } from './FoodCreateNestedOneWithoutStoreInput.schema';
import { EventCreateNestedOneWithoutStoresInputObjectSchema as EventCreateNestedOneWithoutStoresInputObjectSchema } from './EventCreateNestedOneWithoutStoresInput.schema';
import { AdminCreateNestedManyWithoutStoreInputObjectSchema as AdminCreateNestedManyWithoutStoreInputObjectSchema } from './AdminCreateNestedManyWithoutStoreInput.schema';
import { StaffCreateNestedManyWithoutStoreInputObjectSchema as StaffCreateNestedManyWithoutStoreInputObjectSchema } from './StaffCreateNestedManyWithoutStoreInput.schema'

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
  attraction: z.lazy(() => AttractionCreateNestedOneWithoutStoreInputObjectSchema).optional(),
  food: z.lazy(() => FoodCreateNestedOneWithoutStoreInputObjectSchema).optional(),
  event: z.lazy(() => EventCreateNestedOneWithoutStoresInputObjectSchema).optional(),
  admins: z.lazy(() => AdminCreateNestedManyWithoutStoreInputObjectSchema).optional(),
  staffs: z.lazy(() => StaffCreateNestedManyWithoutStoreInputObjectSchema).optional()
}).strict();
export const StoreCreateInputObjectSchema: z.ZodType<Prisma.StoreCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.StoreCreateInput>;
export const StoreCreateInputObjectZodSchema = makeSchema();
