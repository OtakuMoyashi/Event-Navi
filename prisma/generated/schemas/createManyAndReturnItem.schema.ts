import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { ItemSelectObjectSchema as ItemSelectObjectSchema } from './objects/ItemSelect.schema';
import { ItemCreateManyInputObjectSchema as ItemCreateManyInputObjectSchema } from './objects/ItemCreateManyInput.schema';

export const ItemCreateManyAndReturnSchema: z.ZodType<Prisma.ItemCreateManyAndReturnArgs> = z.object({ select: ItemSelectObjectSchema.optional(), data: z.union([ ItemCreateManyInputObjectSchema, z.array(ItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ItemCreateManyAndReturnArgs>;

export const ItemCreateManyAndReturnZodSchema = z.object({ select: ItemSelectObjectSchema.optional(), data: z.union([ ItemCreateManyInputObjectSchema, z.array(ItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();