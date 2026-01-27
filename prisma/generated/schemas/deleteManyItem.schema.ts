import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { ItemWhereInputObjectSchema as ItemWhereInputObjectSchema } from './objects/ItemWhereInput.schema';

export const ItemDeleteManySchema: z.ZodType<Prisma.ItemDeleteManyArgs> = z.object({ where: ItemWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ItemDeleteManyArgs>;

export const ItemDeleteManyZodSchema = z.object({ where: ItemWhereInputObjectSchema.optional() }).strict();