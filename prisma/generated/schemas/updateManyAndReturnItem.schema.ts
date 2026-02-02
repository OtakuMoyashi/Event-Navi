import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { ItemSelectObjectSchema as ItemSelectObjectSchema } from './objects/ItemSelect.schema';
import { ItemUpdateManyMutationInputObjectSchema as ItemUpdateManyMutationInputObjectSchema } from './objects/ItemUpdateManyMutationInput.schema';
import { ItemWhereInputObjectSchema as ItemWhereInputObjectSchema } from './objects/ItemWhereInput.schema';

export const ItemUpdateManyAndReturnSchema: z.ZodType<Prisma.ItemUpdateManyAndReturnArgs> = z.object({ select: ItemSelectObjectSchema.optional(), data: ItemUpdateManyMutationInputObjectSchema, where: ItemWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ItemUpdateManyAndReturnArgs>;

export const ItemUpdateManyAndReturnZodSchema = z.object({ select: ItemSelectObjectSchema.optional(), data: ItemUpdateManyMutationInputObjectSchema, where: ItemWhereInputObjectSchema.optional() }).strict();