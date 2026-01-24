import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  slug: z.string().max(20).optional()
}).strict();
export const StoreWhereUniqueInputObjectSchema: z.ZodType<Prisma.StoreWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.StoreWhereUniqueInput>;
export const StoreWhereUniqueInputObjectZodSchema = makeSchema();
