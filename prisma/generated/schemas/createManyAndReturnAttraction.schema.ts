import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { AttractionSelectObjectSchema as AttractionSelectObjectSchema } from './objects/AttractionSelect.schema';
import { AttractionCreateManyInputObjectSchema as AttractionCreateManyInputObjectSchema } from './objects/AttractionCreateManyInput.schema';

export const AttractionCreateManyAndReturnSchema: z.ZodType<Prisma.AttractionCreateManyAndReturnArgs> = z.object({ select: AttractionSelectObjectSchema.optional(), data: z.union([ AttractionCreateManyInputObjectSchema, z.array(AttractionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AttractionCreateManyAndReturnArgs>;

export const AttractionCreateManyAndReturnZodSchema = z.object({ select: AttractionSelectObjectSchema.optional(), data: z.union([ AttractionCreateManyInputObjectSchema, z.array(AttractionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();