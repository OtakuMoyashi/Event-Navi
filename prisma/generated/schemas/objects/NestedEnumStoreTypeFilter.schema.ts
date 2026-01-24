import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreTypeSchema } from '../enums/StoreType.schema'

const nestedenumstoretypefilterSchema = z.object({
  equals: StoreTypeSchema.optional(),
  in: StoreTypeSchema.array().optional(),
  notIn: StoreTypeSchema.array().optional(),
  not: z.union([StoreTypeSchema, z.lazy(() => NestedEnumStoreTypeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumStoreTypeFilterObjectSchema: z.ZodType<Prisma.NestedEnumStoreTypeFilter> = nestedenumstoretypefilterSchema as unknown as z.ZodType<Prisma.NestedEnumStoreTypeFilter>;
export const NestedEnumStoreTypeFilterObjectZodSchema = nestedenumstoretypefilterSchema;
