import type { Prisma } from '../../../src/generated/prisma/client';
import * as z from 'zod';
import { StoreSelectObjectSchema as StoreSelectObjectSchema } from './objects/StoreSelect.schema';
import { StoreIncludeObjectSchema as StoreIncludeObjectSchema } from './objects/StoreInclude.schema';
import { StoreUpdateInputObjectSchema as StoreUpdateInputObjectSchema } from './objects/StoreUpdateInput.schema';
import { StoreUncheckedUpdateInputObjectSchema as StoreUncheckedUpdateInputObjectSchema } from './objects/StoreUncheckedUpdateInput.schema';
import { StoreWhereUniqueInputObjectSchema as StoreWhereUniqueInputObjectSchema } from './objects/StoreWhereUniqueInput.schema';

export const StoreUpdateOneSchema: z.ZodType<Prisma.StoreUpdateArgs> = z.object({ select: StoreSelectObjectSchema.optional(), include: StoreIncludeObjectSchema.optional(), data: z.union([StoreUpdateInputObjectSchema, StoreUncheckedUpdateInputObjectSchema]), where: StoreWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.StoreUpdateArgs>;

export const StoreUpdateOneZodSchema = z.object({ select: StoreSelectObjectSchema.optional(), include: StoreIncludeObjectSchema.optional(), data: z.union([StoreUpdateInputObjectSchema, StoreUncheckedUpdateInputObjectSchema]), where: StoreWhereUniqueInputObjectSchema }).strict();