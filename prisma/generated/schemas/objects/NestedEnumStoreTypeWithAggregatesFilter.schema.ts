import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreTypeSchema } from '../enums/StoreType.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumStoreTypeFilterObjectSchema as NestedEnumStoreTypeFilterObjectSchema } from './NestedEnumStoreTypeFilter.schema'

const nestedenumstoretypewithaggregatesfilterSchema = z.object({
  equals: StoreTypeSchema.optional(),
  in: StoreTypeSchema.array().optional(),
  notIn: StoreTypeSchema.array().optional(),
  not: z.union([StoreTypeSchema, z.lazy(() => NestedEnumStoreTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumStoreTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumStoreTypeFilterObjectSchema).optional()
}).strict();
export const NestedEnumStoreTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumStoreTypeWithAggregatesFilter> = nestedenumstoretypewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumStoreTypeWithAggregatesFilter>;
export const NestedEnumStoreTypeWithAggregatesFilterObjectZodSchema = nestedenumstoretypewithaggregatesfilterSchema;
