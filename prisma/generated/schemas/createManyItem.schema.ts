import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { ItemCreateManyInputObjectSchema as ItemCreateManyInputObjectSchema } from './objects/ItemCreateManyInput.schema';

export const ItemCreateManySchema: z.ZodType<Prisma.ItemCreateManyArgs> = z.object({ data: z.union([ ItemCreateManyInputObjectSchema, z.array(ItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ItemCreateManyArgs>;

export const ItemCreateManyZodSchema = z.object({ data: z.union([ ItemCreateManyInputObjectSchema, z.array(ItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();