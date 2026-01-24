import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { AttractionSelectObjectSchema as AttractionSelectObjectSchema } from './objects/AttractionSelect.schema';
import { AttractionIncludeObjectSchema as AttractionIncludeObjectSchema } from './objects/AttractionInclude.schema';
import { AttractionWhereUniqueInputObjectSchema as AttractionWhereUniqueInputObjectSchema } from './objects/AttractionWhereUniqueInput.schema';
import { AttractionCreateInputObjectSchema as AttractionCreateInputObjectSchema } from './objects/AttractionCreateInput.schema';
import { AttractionUncheckedCreateInputObjectSchema as AttractionUncheckedCreateInputObjectSchema } from './objects/AttractionUncheckedCreateInput.schema';
import { AttractionUpdateInputObjectSchema as AttractionUpdateInputObjectSchema } from './objects/AttractionUpdateInput.schema';
import { AttractionUncheckedUpdateInputObjectSchema as AttractionUncheckedUpdateInputObjectSchema } from './objects/AttractionUncheckedUpdateInput.schema';

export const AttractionUpsertOneSchema: z.ZodType<Prisma.AttractionUpsertArgs> = z.object({ select: AttractionSelectObjectSchema.optional(), include: AttractionIncludeObjectSchema.optional(), where: AttractionWhereUniqueInputObjectSchema, create: z.union([ AttractionCreateInputObjectSchema, AttractionUncheckedCreateInputObjectSchema ]), update: z.union([ AttractionUpdateInputObjectSchema, AttractionUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.AttractionUpsertArgs>;

export const AttractionUpsertOneZodSchema = z.object({ select: AttractionSelectObjectSchema.optional(), include: AttractionIncludeObjectSchema.optional(), where: AttractionWhereUniqueInputObjectSchema, create: z.union([ AttractionCreateInputObjectSchema, AttractionUncheckedCreateInputObjectSchema ]), update: z.union([ AttractionUpdateInputObjectSchema, AttractionUncheckedUpdateInputObjectSchema ]) }).strict();