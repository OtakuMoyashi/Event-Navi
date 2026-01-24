import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { StoreSelectObjectSchema as StoreSelectObjectSchema } from './objects/StoreSelect.schema';
import { StoreIncludeObjectSchema as StoreIncludeObjectSchema } from './objects/StoreInclude.schema';
import { StoreWhereUniqueInputObjectSchema as StoreWhereUniqueInputObjectSchema } from './objects/StoreWhereUniqueInput.schema';

export const StoreDeleteOneSchema: z.ZodType<Prisma.StoreDeleteArgs> = z.object({ select: StoreSelectObjectSchema.optional(), include: StoreIncludeObjectSchema.optional(), where: StoreWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.StoreDeleteArgs>;

export const StoreDeleteOneZodSchema = z.object({ select: StoreSelectObjectSchema.optional(), include: StoreIncludeObjectSchema.optional(), where: StoreWhereUniqueInputObjectSchema }).strict();