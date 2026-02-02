import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  stock: z.number().int(),
  foodId: z.string(),
  price: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ItemCreateManyInputObjectSchema: z.ZodType<Prisma.ItemCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ItemCreateManyInput>;
export const ItemCreateManyInputObjectZodSchema = makeSchema();
