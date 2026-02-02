import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  foodId: z.string().optional()
}).strict();
export const ItemWhereUniqueInputObjectSchema: z.ZodType<Prisma.ItemWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemWhereUniqueInput>;
export const ItemWhereUniqueInputObjectZodSchema = makeSchema();
