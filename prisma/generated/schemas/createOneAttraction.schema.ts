import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { AttractionSelectObjectSchema as AttractionSelectObjectSchema } from './objects/AttractionSelect.schema';
import { AttractionIncludeObjectSchema as AttractionIncludeObjectSchema } from './objects/AttractionInclude.schema';
import { AttractionCreateInputObjectSchema as AttractionCreateInputObjectSchema } from './objects/AttractionCreateInput.schema';
import { AttractionUncheckedCreateInputObjectSchema as AttractionUncheckedCreateInputObjectSchema } from './objects/AttractionUncheckedCreateInput.schema';

export const AttractionCreateOneSchema: z.ZodType<Prisma.AttractionCreateArgs> = z.object({ select: AttractionSelectObjectSchema.optional(), include: AttractionIncludeObjectSchema.optional(), data: z.union([AttractionCreateInputObjectSchema, AttractionUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.AttractionCreateArgs>;

export const AttractionCreateOneZodSchema = z.object({ select: AttractionSelectObjectSchema.optional(), include: AttractionIncludeObjectSchema.optional(), data: z.union([AttractionCreateInputObjectSchema, AttractionUncheckedCreateInputObjectSchema]) }).strict();