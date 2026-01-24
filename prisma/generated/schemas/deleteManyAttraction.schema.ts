import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { AttractionWhereInputObjectSchema as AttractionWhereInputObjectSchema } from './objects/AttractionWhereInput.schema';

export const AttractionDeleteManySchema: z.ZodType<Prisma.AttractionDeleteManyArgs> = z.object({ where: AttractionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AttractionDeleteManyArgs>;

export const AttractionDeleteManyZodSchema = z.object({ where: AttractionWhereInputObjectSchema.optional() }).strict();