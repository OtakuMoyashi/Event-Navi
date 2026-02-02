import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { ItemSelectObjectSchema as ItemSelectObjectSchema } from './objects/ItemSelect.schema';
import { ItemIncludeObjectSchema as ItemIncludeObjectSchema } from './objects/ItemInclude.schema';
import { ItemWhereUniqueInputObjectSchema as ItemWhereUniqueInputObjectSchema } from './objects/ItemWhereUniqueInput.schema';

export const ItemFindUniqueOrThrowSchema: z.ZodType<Prisma.ItemFindUniqueOrThrowArgs> = z.object({ select: ItemSelectObjectSchema.optional(), include: ItemIncludeObjectSchema.optional(), where: ItemWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ItemFindUniqueOrThrowArgs>;

export const ItemFindUniqueOrThrowZodSchema = z.object({ select: ItemSelectObjectSchema.optional(), include: ItemIncludeObjectSchema.optional(), where: ItemWhereUniqueInputObjectSchema }).strict();