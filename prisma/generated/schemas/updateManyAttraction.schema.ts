import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { AttractionUpdateManyMutationInputObjectSchema as AttractionUpdateManyMutationInputObjectSchema } from './objects/AttractionUpdateManyMutationInput.schema';
import { AttractionWhereInputObjectSchema as AttractionWhereInputObjectSchema } from './objects/AttractionWhereInput.schema';

export const AttractionUpdateManySchema: z.ZodType<Prisma.AttractionUpdateManyArgs> = z.object({ data: AttractionUpdateManyMutationInputObjectSchema, where: AttractionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AttractionUpdateManyArgs>;

export const AttractionUpdateManyZodSchema = z.object({ data: AttractionUpdateManyMutationInputObjectSchema, where: AttractionWhereInputObjectSchema.optional() }).strict();