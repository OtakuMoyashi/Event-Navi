import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreTypeSchema } from '../enums/StoreType.schema';
import { NestedEnumStoreTypeFilterObjectSchema as NestedEnumStoreTypeFilterObjectSchema } from './NestedEnumStoreTypeFilter.schema'

const makeSchema = () => z.object({
  equals: StoreTypeSchema.optional(),
  in: StoreTypeSchema.array().optional(),
  notIn: StoreTypeSchema.array().optional(),
  not: z.union([StoreTypeSchema, z.lazy(() => NestedEnumStoreTypeFilterObjectSchema)]).optional()
}).strict();
export const EnumStoreTypeFilterObjectSchema: z.ZodType<Prisma.EnumStoreTypeFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumStoreTypeFilter>;
export const EnumStoreTypeFilterObjectZodSchema = makeSchema();
