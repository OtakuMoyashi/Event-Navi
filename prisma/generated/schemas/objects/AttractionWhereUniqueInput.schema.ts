import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  storeId: z.string().optional()
}).strict();
export const AttractionWhereUniqueInputObjectSchema: z.ZodType<Prisma.AttractionWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.AttractionWhereUniqueInput>;
export const AttractionWhereUniqueInputObjectZodSchema = makeSchema();
