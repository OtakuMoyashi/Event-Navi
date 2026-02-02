import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  storeId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const AttractionMaxAggregateInputObjectSchema: z.ZodType<Prisma.AttractionMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AttractionMaxAggregateInputType>;
export const AttractionMaxAggregateInputObjectZodSchema = makeSchema();
