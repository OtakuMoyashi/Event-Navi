import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { StoreSelectObjectSchema as StoreSelectObjectSchema } from './objects/StoreSelect.schema';
import { StoreUpdateManyMutationInputObjectSchema as StoreUpdateManyMutationInputObjectSchema } from './objects/StoreUpdateManyMutationInput.schema';
import { StoreWhereInputObjectSchema as StoreWhereInputObjectSchema } from './objects/StoreWhereInput.schema';

export const StoreUpdateManyAndReturnSchema: z.ZodType<Prisma.StoreUpdateManyAndReturnArgs> = z.object({ select: StoreSelectObjectSchema.optional(), data: StoreUpdateManyMutationInputObjectSchema, where: StoreWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StoreUpdateManyAndReturnArgs>;

export const StoreUpdateManyAndReturnZodSchema = z.object({ select: StoreSelectObjectSchema.optional(), data: StoreUpdateManyMutationInputObjectSchema, where: StoreWhereInputObjectSchema.optional() }).strict();