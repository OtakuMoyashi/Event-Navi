import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  storeId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const FoodCreateManyInputObjectSchema: z.ZodType<Prisma.FoodCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.FoodCreateManyInput>;
export const FoodCreateManyInputObjectZodSchema = makeSchema();
