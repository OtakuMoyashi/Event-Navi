import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { StoreSelectObjectSchema as StoreSelectObjectSchema } from './objects/StoreSelect.schema';
import { StoreIncludeObjectSchema as StoreIncludeObjectSchema } from './objects/StoreInclude.schema';
import { StoreWhereUniqueInputObjectSchema as StoreWhereUniqueInputObjectSchema } from './objects/StoreWhereUniqueInput.schema';

export const StoreFindUniqueSchema: z.ZodType<Prisma.StoreFindUniqueArgs> = z.object({ select: StoreSelectObjectSchema.optional(), include: StoreIncludeObjectSchema.optional(), where: StoreWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.StoreFindUniqueArgs>;

export const StoreFindUniqueZodSchema = z.object({ select: StoreSelectObjectSchema.optional(), include: StoreIncludeObjectSchema.optional(), where: StoreWhereUniqueInputObjectSchema }).strict();