import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreTypeSchema } from '../enums/StoreType.schema';
import { AttractionUncheckedCreateNestedOneWithoutStoreInputObjectSchema as AttractionUncheckedCreateNestedOneWithoutStoreInputObjectSchema } from './AttractionUncheckedCreateNestedOneWithoutStoreInput.schema';
import { AdminUncheckedCreateNestedManyWithoutStoreInputObjectSchema as AdminUncheckedCreateNestedManyWithoutStoreInputObjectSchema } from './AdminUncheckedCreateNestedManyWithoutStoreInput.schema';
import { StaffUncheckedCreateNestedManyWithoutStoreInputObjectSchema as StaffUncheckedCreateNestedManyWithoutStoreInputObjectSchema } from './StaffUncheckedCreateNestedManyWithoutStoreInput.schema'

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
  admins: z.lazy(() => AdminUncheckedCreateNestedManyWithoutStoreInputObjectSchema).optional(),
  staffs: z.lazy(() => StaffUncheckedCreateNestedManyWithoutStoreInputObjectSchema).optional()
}).strict();
export const StoreUncheckedCreateWithoutFoodInputObjectSchema: z.ZodType<Prisma.StoreUncheckedCreateWithoutFoodInput> = makeSchema() as unknown as z.ZodType<Prisma.StoreUncheckedCreateWithoutFoodInput>;
export const StoreUncheckedCreateWithoutFoodInputObjectZodSchema = makeSchema();
