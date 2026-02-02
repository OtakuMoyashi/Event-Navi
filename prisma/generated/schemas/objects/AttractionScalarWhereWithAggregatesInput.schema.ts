import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const attractionscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => AttractionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AttractionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AttractionScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AttractionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AttractionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  storeId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const AttractionScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.AttractionScalarWhereWithAggregatesInput> = attractionscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.AttractionScalarWhereWithAggregatesInput>;
export const AttractionScalarWhereWithAggregatesInputObjectZodSchema = attractionscalarwherewithaggregatesinputSchema;
