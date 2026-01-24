import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { StoreSelectObjectSchema as StoreSelectObjectSchema } from './objects/StoreSelect.schema';
import { StoreIncludeObjectSchema as StoreIncludeObjectSchema } from './objects/StoreInclude.schema';
import { StoreWhereUniqueInputObjectSchema as StoreWhereUniqueInputObjectSchema } from './objects/StoreWhereUniqueInput.schema';

export const StoreFindUniqueOrThrowSchema: z.ZodType<Prisma.StoreFindUniqueOrThrowArgs> = z.object({ select: StoreSelectObjectSchema.optional(), include: StoreIncludeObjectSchema.optional(), where: StoreWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.StoreFindUniqueOrThrowArgs>;

export const StoreFindUniqueOrThrowZodSchema = z.object({ select: StoreSelectObjectSchema.optional(), include: StoreIncludeObjectSchema.optional(), where: StoreWhereUniqueInputObjectSchema }).strict();