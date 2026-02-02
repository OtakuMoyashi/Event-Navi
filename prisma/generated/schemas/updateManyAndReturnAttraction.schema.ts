import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { AttractionSelectObjectSchema as AttractionSelectObjectSchema } from './objects/AttractionSelect.schema';
import { AttractionUpdateManyMutationInputObjectSchema as AttractionUpdateManyMutationInputObjectSchema } from './objects/AttractionUpdateManyMutationInput.schema';
import { AttractionWhereInputObjectSchema as AttractionWhereInputObjectSchema } from './objects/AttractionWhereInput.schema';

export const AttractionUpdateManyAndReturnSchema: z.ZodType<Prisma.AttractionUpdateManyAndReturnArgs> = z.object({ select: AttractionSelectObjectSchema.optional(), data: AttractionUpdateManyMutationInputObjectSchema, where: AttractionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AttractionUpdateManyAndReturnArgs>;

export const AttractionUpdateManyAndReturnZodSchema = z.object({ select: AttractionSelectObjectSchema.optional(), data: AttractionUpdateManyMutationInputObjectSchema, where: AttractionWhereInputObjectSchema.optional() }).strict();