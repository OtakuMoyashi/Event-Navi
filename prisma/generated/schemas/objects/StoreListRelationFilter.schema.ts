import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreWhereInputObjectSchema as StoreWhereInputObjectSchema } from './StoreWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => StoreWhereInputObjectSchema).optional(),
  some: z.lazy(() => StoreWhereInputObjectSchema).optional(),
  none: z.lazy(() => StoreWhereInputObjectSchema).optional()
}).strict();
export const StoreListRelationFilterObjectSchema: z.ZodType<Prisma.StoreListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.StoreListRelationFilter>;
export const StoreListRelationFilterObjectZodSchema = makeSchema();
