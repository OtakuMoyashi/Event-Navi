import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { AttractionSelectObjectSchema as AttractionSelectObjectSchema } from './objects/AttractionSelect.schema';
import { AttractionIncludeObjectSchema as AttractionIncludeObjectSchema } from './objects/AttractionInclude.schema';
import { AttractionUpdateInputObjectSchema as AttractionUpdateInputObjectSchema } from './objects/AttractionUpdateInput.schema';
import { AttractionUncheckedUpdateInputObjectSchema as AttractionUncheckedUpdateInputObjectSchema } from './objects/AttractionUncheckedUpdateInput.schema';
import { AttractionWhereUniqueInputObjectSchema as AttractionWhereUniqueInputObjectSchema } from './objects/AttractionWhereUniqueInput.schema';

export const AttractionUpdateOneSchema: z.ZodType<Prisma.AttractionUpdateArgs> = z.object({ select: AttractionSelectObjectSchema.optional(), include: AttractionIncludeObjectSchema.optional(), data: z.union([AttractionUpdateInputObjectSchema, AttractionUncheckedUpdateInputObjectSchema]), where: AttractionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AttractionUpdateArgs>;

export const AttractionUpdateOneZodSchema = z.object({ select: AttractionSelectObjectSchema.optional(), include: AttractionIncludeObjectSchema.optional(), data: z.union([AttractionUpdateInputObjectSchema, AttractionUncheckedUpdateInputObjectSchema]), where: AttractionWhereUniqueInputObjectSchema }).strict();