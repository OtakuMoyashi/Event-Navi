import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  storeId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const AttractionCountAggregateInputObjectSchema: z.ZodType<Prisma.AttractionCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AttractionCountAggregateInputType>;
export const AttractionCountAggregateInputObjectZodSchema = makeSchema();
