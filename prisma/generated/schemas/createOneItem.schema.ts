import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { ItemSelectObjectSchema as ItemSelectObjectSchema } from './objects/ItemSelect.schema';
import { ItemIncludeObjectSchema as ItemIncludeObjectSchema } from './objects/ItemInclude.schema';
import { ItemCreateInputObjectSchema as ItemCreateInputObjectSchema } from './objects/ItemCreateInput.schema';
import { ItemUncheckedCreateInputObjectSchema as ItemUncheckedCreateInputObjectSchema } from './objects/ItemUncheckedCreateInput.schema';

export const ItemCreateOneSchema: z.ZodType<Prisma.ItemCreateArgs> = z.object({ select: ItemSelectObjectSchema.optional(), include: ItemIncludeObjectSchema.optional(), data: z.union([ItemCreateInputObjectSchema, ItemUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ItemCreateArgs>;

export const ItemCreateOneZodSchema = z.object({ select: ItemSelectObjectSchema.optional(), include: ItemIncludeObjectSchema.optional(), data: z.union([ItemCreateInputObjectSchema, ItemUncheckedCreateInputObjectSchema]) }).strict();