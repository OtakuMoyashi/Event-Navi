import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { ItemSelectObjectSchema as ItemSelectObjectSchema } from './objects/ItemSelect.schema';
import { ItemIncludeObjectSchema as ItemIncludeObjectSchema } from './objects/ItemInclude.schema';
import { ItemWhereUniqueInputObjectSchema as ItemWhereUniqueInputObjectSchema } from './objects/ItemWhereUniqueInput.schema';
import { ItemCreateInputObjectSchema as ItemCreateInputObjectSchema } from './objects/ItemCreateInput.schema';
import { ItemUncheckedCreateInputObjectSchema as ItemUncheckedCreateInputObjectSchema } from './objects/ItemUncheckedCreateInput.schema';
import { ItemUpdateInputObjectSchema as ItemUpdateInputObjectSchema } from './objects/ItemUpdateInput.schema';
import { ItemUncheckedUpdateInputObjectSchema as ItemUncheckedUpdateInputObjectSchema } from './objects/ItemUncheckedUpdateInput.schema';

export const ItemUpsertOneSchema: z.ZodType<Prisma.ItemUpsertArgs> = z.object({ select: ItemSelectObjectSchema.optional(), include: ItemIncludeObjectSchema.optional(), where: ItemWhereUniqueInputObjectSchema, create: z.union([ ItemCreateInputObjectSchema, ItemUncheckedCreateInputObjectSchema ]), update: z.union([ ItemUpdateInputObjectSchema, ItemUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ItemUpsertArgs>;

export const ItemUpsertOneZodSchema = z.object({ select: ItemSelectObjectSchema.optional(), include: ItemIncludeObjectSchema.optional(), where: ItemWhereUniqueInputObjectSchema, create: z.union([ ItemCreateInputObjectSchema, ItemUncheckedCreateInputObjectSchema ]), update: z.union([ ItemUpdateInputObjectSchema, ItemUncheckedUpdateInputObjectSchema ]) }).strict();