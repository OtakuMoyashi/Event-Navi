import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { ItemSelectObjectSchema as ItemSelectObjectSchema } from './objects/ItemSelect.schema';
import { ItemIncludeObjectSchema as ItemIncludeObjectSchema } from './objects/ItemInclude.schema';
import { ItemUpdateInputObjectSchema as ItemUpdateInputObjectSchema } from './objects/ItemUpdateInput.schema';
import { ItemUncheckedUpdateInputObjectSchema as ItemUncheckedUpdateInputObjectSchema } from './objects/ItemUncheckedUpdateInput.schema';
import { ItemWhereUniqueInputObjectSchema as ItemWhereUniqueInputObjectSchema } from './objects/ItemWhereUniqueInput.schema';

export const ItemUpdateOneSchema: z.ZodType<Prisma.ItemUpdateArgs> = z.object({ select: ItemSelectObjectSchema.optional(), include: ItemIncludeObjectSchema.optional(), data: z.union([ItemUpdateInputObjectSchema, ItemUncheckedUpdateInputObjectSchema]), where: ItemWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ItemUpdateArgs>;

export const ItemUpdateOneZodSchema = z.object({ select: ItemSelectObjectSchema.optional(), include: ItemIncludeObjectSchema.optional(), data: z.union([ItemUpdateInputObjectSchema, ItemUncheckedUpdateInputObjectSchema]), where: ItemWhereUniqueInputObjectSchema }).strict();