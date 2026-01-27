import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { ItemUpdateManyMutationInputObjectSchema as ItemUpdateManyMutationInputObjectSchema } from './objects/ItemUpdateManyMutationInput.schema';
import { ItemWhereInputObjectSchema as ItemWhereInputObjectSchema } from './objects/ItemWhereInput.schema';

export const ItemUpdateManySchema: z.ZodType<Prisma.ItemUpdateManyArgs> = z.object({ data: ItemUpdateManyMutationInputObjectSchema, where: ItemWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ItemUpdateManyArgs>;

export const ItemUpdateManyZodSchema = z.object({ data: ItemUpdateManyMutationInputObjectSchema, where: ItemWhereInputObjectSchema.optional() }).strict();