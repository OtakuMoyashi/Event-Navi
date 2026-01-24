import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreTypeSchema } from '../enums/StoreType.schema';
import { AttractionUncheckedCreateNestedOneWithoutStoreInputObjectSchema as AttractionUncheckedCreateNestedOneWithoutStoreInputObjectSchema } from './AttractionUncheckedCreateNestedOneWithoutStoreInput.schema';
import { FoodUncheckedCreateNestedOneWithoutStoreInputObjectSchema as FoodUncheckedCreateNestedOneWithoutStoreInputObjectSchema } from './FoodUncheckedCreateNestedOneWithoutStoreInput.schema';
import { AdminUncheckedCreateNestedManyWithoutStoreInputObjectSchema as AdminUncheckedCreateNestedManyWithoutStoreInputObjectSchema } from './AdminUncheckedCreateNestedManyWithoutStoreInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  slug: z.string(),
  name: z.string(),
  isActive: z.boolean().optional(),
  startedAt: z.coerce.date().optional().nullable(),
  finishedAt: z.coerce.date().optional().nullable(),
  description: z.string().optional().nullable(),
  storeType: StoreTypeSchema,
  eventId: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  attraction: z.lazy(() => AttractionUncheckedCreateNestedOneWithoutStoreInputObjectSchema).optional(),
  food: z.lazy(() => FoodUncheckedCreateNestedOneWithoutStoreInputObjectSchema).optional(),
  admins: z.lazy(() => AdminUncheckedCreateNestedManyWithoutStoreInputObjectSchema).optional()
}).strict();
export const StoreUncheckedCreateWithoutStaffsInputObjectSchema: z.ZodType<Prisma.StoreUncheckedCreateWithoutStaffsInput> = makeSchema() as unknown as z.ZodType<Prisma.StoreUncheckedCreateWithoutStaffsInput>;
export const StoreUncheckedCreateWithoutStaffsInputObjectZodSchema = makeSchema();
