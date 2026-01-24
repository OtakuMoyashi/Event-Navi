import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  storeId: z.string().optional()
}).strict();
export const FoodWhereUniqueInputObjectSchema: z.ZodType<Prisma.FoodWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.FoodWhereUniqueInput>;
export const FoodWhereUniqueInputObjectZodSchema = makeSchema();
