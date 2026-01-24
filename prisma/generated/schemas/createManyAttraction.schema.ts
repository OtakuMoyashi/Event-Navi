import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { AttractionCreateManyInputObjectSchema as AttractionCreateManyInputObjectSchema } from './objects/AttractionCreateManyInput.schema';

export const AttractionCreateManySchema: z.ZodType<Prisma.AttractionCreateManyArgs> = z.object({ data: z.union([ AttractionCreateManyInputObjectSchema, z.array(AttractionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AttractionCreateManyArgs>;

export const AttractionCreateManyZodSchema = z.object({ data: z.union([ AttractionCreateManyInputObjectSchema, z.array(AttractionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();