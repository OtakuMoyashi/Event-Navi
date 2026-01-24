import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { AttractionSelectObjectSchema as AttractionSelectObjectSchema } from './objects/AttractionSelect.schema';
import { AttractionIncludeObjectSchema as AttractionIncludeObjectSchema } from './objects/AttractionInclude.schema';
import { AttractionWhereUniqueInputObjectSchema as AttractionWhereUniqueInputObjectSchema } from './objects/AttractionWhereUniqueInput.schema';

export const AttractionFindUniqueSchema: z.ZodType<Prisma.AttractionFindUniqueArgs> = z.object({ select: AttractionSelectObjectSchema.optional(), include: AttractionIncludeObjectSchema.optional(), where: AttractionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AttractionFindUniqueArgs>;

export const AttractionFindUniqueZodSchema = z.object({ select: AttractionSelectObjectSchema.optional(), include: AttractionIncludeObjectSchema.optional(), where: AttractionWhereUniqueInputObjectSchema }).strict();