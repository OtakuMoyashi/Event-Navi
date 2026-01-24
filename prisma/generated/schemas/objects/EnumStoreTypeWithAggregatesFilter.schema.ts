import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreTypeSchema } from '../enums/StoreType.schema';
import { NestedEnumStoreTypeWithAggregatesFilterObjectSchema as NestedEnumStoreTypeWithAggregatesFilterObjectSchema } from './NestedEnumStoreTypeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumStoreTypeFilterObjectSchema as NestedEnumStoreTypeFilterObjectSchema } from './NestedEnumStoreTypeFilter.schema'

const makeSchema = () => z.object({
  equals: StoreTypeSchema.optional(),
  in: StoreTypeSchema.array().optional(),
  notIn: StoreTypeSchema.array().optional(),
  not: z.union([StoreTypeSchema, z.lazy(() => NestedEnumStoreTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumStoreTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumStoreTypeFilterObjectSchema).optional()
}).strict();
export const EnumStoreTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumStoreTypeWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumStoreTypeWithAggregatesFilter>;
export const EnumStoreTypeWithAggregatesFilterObjectZodSchema = makeSchema();
